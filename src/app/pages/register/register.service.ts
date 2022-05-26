import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterCommand } from 'src/app/model/package/command/register-command';
import { UserDTO } from 'src/app/model/package/dto/user.dto';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { 
  }

  register(email:string, password:string, name:string, surname:string){
    const registerModel = new RegisterCommand();
    registerModel.email = email;
    registerModel.password = password;
    registerModel.name = name;
    registerModel.surname = surname;

    return this.http.post<UserDTO>('http://2.44.173.210:7080/comic-be/api/login/register', registerModel);
  }
}
