import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { NavigationStart, Router, RouterEvent, RouterLink, RouterLinkActive } from '@angular/router';
import { UserDTO } from 'src/app/model/package/dto/user.dto';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  mioForm;
  username:string;
  password:string;

  constructor(private fb:FormBuilder, private loginService:LoginService, private router: Router) { 

    this.mioForm = fb.group({
      username: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    })

  }

  login(){
    this.loginService.login(this.username, this.password).subscribe(resp=>{
      const user: UserDTO = resp;
      console.log(user);
      this.router.navigateByUrl("/home")
    })
  }

  ngOnInit() {
  }

}
