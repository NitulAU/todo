export class Task{
    public name:string;
    public color:string="transparent";
    public category:string="others";
    public isComplete:boolean=false;
    constructor(n:string,c:string,cat:string){
        this.name=n;
        this.color=c;
        this.category=cat;
    }
}
