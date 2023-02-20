import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
      constructor(private router:Router,private auth:AuthService){}
      canActivate(){
          if(this.auth.IsLoggedIn()){
            return true;
          }
          console.log("You are signed out, please sign in!");
          this.router.navigate(['form']);
          return false;
      }
}
