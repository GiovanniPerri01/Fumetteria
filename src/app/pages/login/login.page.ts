import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  username:string;
  password:string;

  constructor() { }

  login(){
    if(this.username == "" || this.password == ""){
      alert("Username o password vuote");
    }
    for(let i = 0; i < this.username.length; i++){
      if(this.username[i] == "?" || this.username[i] == "!" || this.username[i] == "&"){
        alert("L'username contiene caratteri non consentiti");
        break
      }
    }
  }

  ngOnInit() {
  }

}
