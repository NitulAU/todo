import { Component, Input } from '@angular/core';
import { LoginService } from './form/login.service';
import { Task } from './shared/task.model';
import { TaskListService } from './taskList.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TaskListService]
})
export class AppComponent {
  title = 'assignment-1';
  todo:Task;
  constructor(public t:TaskListService){}

}
