import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { SlickCarouselModule } from 'ngx-slick-carousel';

// ANGULAR MATERIAL
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PokemonsPageComponent } from './pages/pokemons-page/pokemons-page.component';
import { ItemsPageComponent } from './pages/items-page/items-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ErrorNotFoundPageComponent } from './pages/error-not-found-page/error-not-found-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardsComponent } from './components/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PokemonsPageComponent,
    ItemsPageComponent,
    AboutUsPageComponent,
    ToolbarComponent,
    SearchbarComponent,
    NavbarComponent,
    ErrorNotFoundPageComponent,
    FooterComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    YouTubePlayerModule,
    SlickCarouselModule,

    // ANGULAR MATERIAL
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
