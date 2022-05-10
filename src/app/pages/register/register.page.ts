import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IonDatetime } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  mioForm;
  charSpeciali:string = "?!^&()#$%*<>";

  constructor(private fb:FormBuilder) { 

    this.mioForm = fb.group({
      nome: ['', Validators.required],
      cognome: ['',Validators.required],
      username: ['', Validators.compose([Validators.required, Validators.email])],
      dataNascita: ['',Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      confPassword: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    })

  }

  register(){

    let username:string = this.mioForm.get("username").value;
    
    for(let i:number = 0; i < this.charSpeciali.length; i++){
      if(username.includes(this.charSpeciali[i])){
        alert("L'username contiene caratteri non consentiti");
        break
      }
    }
    if(this.mioForm.get("password").value != this.mioForm.get("confPassword").value){
      alert("Le password non corrispondono");
    }

  }

  ngOnInit() {
  }

}
