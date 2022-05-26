import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginCommand } from 'src/app/model/package/command/login.command';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { 
    
  }

  login(username:string, password:string){
    
    const loginModel = new LoginCommand();
    loginModel.email = username;
    loginModel.password = password;

    return this.http.post<any>('http://2.44.173.210:7080/comic-be/api/login/login', loginModel);
  }
}