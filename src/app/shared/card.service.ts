import { Task } from "./task.model";

export class CardService{
    cardTask:Task=new Task("card view","#fff","oth");
    cardView:boolean=true;
    onCardView(a,b){
        this.cardTask=a;
        this.cardView=b;
    }
}