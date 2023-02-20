import { Task } from "./shared/task.model";

export class TaskListService{
    todoList:Task[]=[new Task("Demo task number 1","#fff","others")];
    addtoList(t:Task){
        this.todoList.push(t);
    }
    removeTask(taskName:Task):boolean{
        let ls=this.todoList;
        for(var index=0;index<ls.length;index++){
            // console.log(index);
            if(ls[index]===taskName){ //removing 1st task with same name
                taskName=null;    //loops till the end of array for no reason
                console.log("Removing task: ",ls[index]);
                ls.splice(index,1);
                return true;
            }   
         }
    }
}