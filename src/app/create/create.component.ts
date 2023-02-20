import { Component, Output, EventEmitter, HostBinding, Input } from '@angular/core';
import { Task } from '../shared/task.model';
import { TaskListService } from '../taskList.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  name:string;
  color:string="transparent";
  category:string="others";
  newTask:Task;
  palette:string[]=["#CDE990","#FFFBAC","#93C6E7","#FFD4D4"]
  createBtn:boolean=true;

  tas:TaskListService;
  constructor(t:TaskListService){
    this.tas=t;
  }
  onUpdateTodo(e:any){
    var val=e.target.value;
    if(val!==""){
      this.createBtn=false;
      this.name=val;
    }
    else{
      this.createBtn=true;
    }
  }
  onCreate(){
    this.newTask=new Task(this.name,this.color,this.category);
    this.tas.addtoList(this.newTask);
    console.log(this.newTask);
    this.color="transparent";
  }
  onChoice(c:string){
    this.color=c;
  }
  onCatReceive(e:string){
    console.log(e,"received @ create");
    this.category=e;
  }
  // colorFocusOut(){

  // }
}
