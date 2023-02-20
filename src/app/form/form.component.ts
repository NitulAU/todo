import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { LoginService } from './login.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  lgStatus:boolean=false;
  u:User;
  username:string="admin";
  pass:string="1234"; 
  passwordMsg:string="";
  blankMsg:string="";
  constructor(private ls:LoginService,private router:Router, private userDetails:UserService){}
  onLogin(){
    if(this.username!="" && this.pass!=""){
      this.u=new User(this.username,this.pass);
      console.log(this.u);
      this.lgStatus=this.ls.check(this.u);
      if(this.lgStatus){
        this.userDetails.current=this.u;
        this.router.navigateByUrl('/main')
      }
      else{
        this.passwordMsg="check your username and password";
      }
    }
    else{
      this.passwordMsg="User name or password can not be empty";
    }
  }
  textInputCheck(e:any){
    if(e.target.value===""){
      this.passwordMsg="User name or password can not be empty";
    }
    else
      this.passwordMsg="";
  }
}
