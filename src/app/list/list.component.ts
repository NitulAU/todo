import { Component, ElementRef, HostBinding, Input } from '@angular/core';
import { CardService } from '../shared/card.service';
import { Task } from '../shared/task.model';
import { TaskListService } from '../taskList.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:[CardService]
})
export class ListComponent {
  tasks:Task[]=[];
  ser:TaskListService;

  constructor(t:TaskListService, private elRef: ElementRef, private cs:CardService){
    this.tasks=t.todoList;
    this.ser=t;
  }
  onDone(e:any,t:Task){
    let op=e.target;
    if(op.checked){
      e.target.parentElement.style.opacity=0.5;
      // e.target.nextSibling.nextSibling.style.opacity=1; //not working
      t.isComplete=true;
    }
    else{
      e.target.parentElement.style.opacity=1;
      // e.target.nextSibling.style.opacity=1;
      t.isComplete=false;
    }
  }
  onDelete(t:Task){
    let res=this.ser.removeTask(t);

    console.log(this.tasks);
  }
  onSelectTask(selectedTask:Task){
    console.log("task selected",selectedTask)
    this.cs.onCardView(selectedTask,true);
  }
}
