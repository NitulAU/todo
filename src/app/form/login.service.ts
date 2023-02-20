import { User } from '../shared/user.model';

export class LoginService{
    userStatus:boolean;
    users:User[]=[  new User('admin','1234'),
                    new User('nitul','1234'),
                    new User('advaith','1234'),
                    new User('arjun','1234')];
    constructor(){
        this.userStatus=false;
    }
    getStatus(){
        return this.userStatus;
    }
    check(u:User) : boolean{
        for(var i of this.users){
            if(u.uname===i.uname){
                if(u.pd===i.pd){
                    this.userStatus=true;
                    return this.userStatus;
                }
            }
        }
        this.userStatus=false;
        return false;
    }
}