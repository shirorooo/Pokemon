import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Route, Router, Routes } from '@angular/router';
import { routes as appRoutes } from '../../app-routing.module';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  public listOfPage!: Routes
  public activePage!: Route
  public currentUrl!: string
  public isScrolled: boolean = false;
  public background: ThemePalette = undefined;

  constructor(private router: Router){
    this.initializeListOfPages()
    this.checkCurrentUrl()
  }

  /**
   * The function "checkCurrentUrl" listens for navigation events and updates the currentUrl and
   * activePage variables based on the current URL path.
   */
  private checkCurrentUrl(){
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = this.router.url.replace(/\//g, '')
        const currentPage = this.listOfPage.find(page => page.path && page.path === this.currentUrl)
        if(currentPage) this.activePage = currentPage 
      }
    });
  }

 /**
  * The function initializes a list of pages by filtering out routes with specific paths and sets the
  * active page to the first item in the list.
  */
  public initializeListOfPages(){
    this.listOfPage = appRoutes.filter(route => route.path && route.path !== "**" && route.path !== "error-404")
    this.activePage = this.listOfPage[0]
  }

  /* The `@HostListener("window:scroll")` decorator is used to listen for the scroll event on the
  window object. When the user scrolls the page, the `scrollEvent()` method is triggered. */
  @HostListener("window:scroll")
  public scrollEvent() {
      window.pageYOffset >= 80 ? (this.background = 'primary') : (this.background = undefined);
  }
}
