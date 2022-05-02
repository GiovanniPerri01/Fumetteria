import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import { ToolbarInferioreComponent } from '../components/toolbar-inferiore/toolbar-inferiore.component';
import { ToolbarSuperioreComponent } from '../components/toolbar-superiore/toolbar-superiore.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule
  ],
  declarations: [RegisterPage, ToolbarInferioreComponent, ToolbarSuperioreComponent]
})
export class RegisterPageModule {}
