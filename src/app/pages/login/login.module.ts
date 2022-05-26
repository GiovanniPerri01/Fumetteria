import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { ToolbarSuperioreComponent } from 'src/app/components/toolbar-superiore/toolbar-superiore.component';
import { ToolbarInferioreComponent } from 'src/app/components/toolbar-inferiore/toolbar-inferiore.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { ButtonModule } from 'src/app/components/button/button.module';
import { ToolbarInferioreModule } from 'src/app/components/toolbar-inferiore/toolbar-inferiore.module';
import { ToolbarSuperioreModule } from 'src/app/components/toolbar-superiore/toolbar-superiore.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    ToolbarInferioreModule,
    ToolbarSuperioreModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
