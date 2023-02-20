import { Injectable } from '@angular/core';
import { LoginService } from '../form/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private ls:LoginService) { }
    IsLoggedIn(){
      return this.ls.getStatus();
    }
}
