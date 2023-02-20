import { Component, OnInit } from '@angular/core';
import { debounceTime, fromEvent, map, Observable, startWith } from 'rxjs';
import { CardService } from 'src/app/shared/card.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css'],
  providers:[CardService]
})
export class BasicComponent implements OnInit{
  hr:boolean=false;
  viewCard:boolean=true;
  constructor(private cs:CardService){}
  // isScreenSmall$;
  onTaskClick(e:boolean){
    this.viewCard=e;
  }
  onCardEmit(e:boolean){
    this.viewCard=e;
  }
  ngOnInit(){
    //do thhis after learning observables
      console.log("hi",this.viewCard);
      this.viewCard=this.cs.cardView;
      console.log("hi2",this.viewCard);
      if(window.screen.width<=600){
        this.hr=true;
      }
  //   // Checks if screen size is less than 1024 pixels
  //   const checkScreenSize = () => document.body.offsetWidth < 640;

  //   // Create observable from window resize event throttled so only fires every 500ms
  //   const screenSizeChanged$ = fromEvent(window, 'resize').pipe(debounceTime(500)).pipe(map(checkScreenSize));

  //   // Start off with the initial value use the isScreenSmall$ | async in the
  //   // view to get both the original value and the new value after resize.
  //   this.isScreenSmall$ = screenSizeChanged$.pipe(startWith(checkScreenSize()))
  }
}
