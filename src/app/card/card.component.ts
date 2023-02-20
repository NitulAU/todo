import { Component, EventEmitter, Output } from '@angular/core';
import { CardService } from '../shared/card.service';
import { Task } from '../shared/task.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
  // providers:[CardService]
})
export class CardComponent {
  @Output() cardClose=new EventEmitter<boolean>();
  task:Task=null;
  constructor(private cs:CardService){}
  ngOnInit(){
    console.log("Task recieved at card");
    this.task=this.cs.cardTask;
  }
  onCloseCard(){
    this.cs.cardTask=null;
    this.cs.cardView=false;
    this.cardClose.emit(false);
  }
}
