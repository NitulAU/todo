import { Component } from '@angular/core';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent {
  cancel(){
    console.log("cancel");
  }
  signOut(){
    console.log("signout");
  }
}
