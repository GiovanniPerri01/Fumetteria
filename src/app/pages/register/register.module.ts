import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import { ToolbarInferioreComponent } from 'src/app/components/toolbar-inferiore/toolbar-inferiore.component';
import { ToolbarSuperioreComponent } from 'src/app/components/toolbar-superiore/toolbar-superiore.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule
  ],
  declarations: [RegisterPage, ToolbarSuperioreComponent, ToolbarInferioreComponent] 
})
export class RegisterPageModule {}