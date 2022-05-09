import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  mioForm;
  charSpeciali:string = "?!^&()#$%*";

  constructor(private fb:FormBuilder) { 

    this.mioForm = fb.group({
      username: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    })

  }

  login(){
    let username:string = this.mioForm.get("username").value;
    if(this.mioForm.get("password").value.length<8){
      alert("Password troppo corta, deve contenere minimo 8 caratteri");
    }
    for(let i:number = 0; i < this.charSpeciali.length; i++){
      if(username.includes(this.charSpeciali[i])){
        alert("L'username contiene caratteri non consentiti");
        break
      }
    }
  }

  ngOnInit() {
  }

}
