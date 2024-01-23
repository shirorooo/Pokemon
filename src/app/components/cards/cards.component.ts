import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent{

  @Input() public listOfYoutubeVideoId!: string[]

  private apiLoaded = false;
  public slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 3,
    "autoplay": true,
    "autoplaySpeed": 5400,
    "pauseOnHover": true,
    "infinite": true,
    "arrows": true,
    "dots": true,
    "responsive": [
      {
        "breakpoint": 900,
        "settings": {
          "slideToShow": 2,
          "infinite": true,
          "slidesToScroll": 2
        }
      },
      {
        "breakpoint": 700,
        "settings": {
          "slideToShow": 1,
          "infinite": true,
          "slidesToScroll": 1
        }
      }
    ]
  }

  constructor(){
    this.initializeYoutubeIframe()
  }

  /**
   * The function initializes the YouTube iframe API by dynamically adding a script tag to the HTML
   * document.
   */
  private initializeYoutubeIframe(){
    if (!this.apiLoaded && typeof document !== 'undefined') {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }
}
