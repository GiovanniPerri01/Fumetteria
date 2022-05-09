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
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    })

  }

  login(){
    let username:string = this.mioForm.get("username").value;
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
