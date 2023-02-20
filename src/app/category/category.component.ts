import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  catList:string[]=["Entertainment","Study","Work","others"];
  cat:string;
  @Output() catEmiter=new EventEmitter<string>();
  selectedCat:string="others";
  onCat(e:any){
    this.selectedCat=e.target.innerText.trim();
    console.log("emiting",this.selectedCat)
    this.catEmiter.emit(this.selectedCat);
  }
  onCatSelect(e:any){}
  onAddCat(){}
}
