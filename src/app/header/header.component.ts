import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  u:User;
  userName:string;
  userImg:string;
  constructor( private userDetails:UserService){
    this.u=this.userDetails.current;
    this.userName=this.u.uname.toUpperCase();
    this.userImg="../../assets/img/avatar1.jpg";
  }

}
