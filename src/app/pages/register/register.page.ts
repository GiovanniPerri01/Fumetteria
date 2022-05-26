import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IonDatetime } from '@ionic/angular';
import { UserDTO } from 'src/app/model/package/dto/user.dto';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  mioForm;
  charSpeciali:string = "?!^&()#$%*<>";
  username:string;
  password:string;
  nome:string;
  cognome:string;

  constructor(private fb:FormBuilder, private registerService:RegisterService) { 

    this.mioForm = fb.group({
      nome: ['', Validators.required],
      cognome: ['',Validators.required],
      username: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      confPassword: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    })

  }

  register(){
    this.registerService.register(this.username, this.password, this.nome, this.cognome).subscribe(resp=>{
      const user: UserDTO = resp;
      console.log(user);
    })
  }

  ngOnInit() {
  }

}
