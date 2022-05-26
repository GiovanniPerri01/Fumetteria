import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import { ToolbarInferioreComponent } from 'src/app/components/toolbar-inferiore/toolbar-inferiore.component';
import { ToolbarSuperioreComponent } from 'src/app/components/toolbar-superiore/toolbar-superiore.component';
import { ToolbarInferioreModule } from 'src/app/components/toolbar-inferiore/toolbar-inferiore.module';
import { ToolbarSuperioreModule } from 'src/app/components/toolbar-superiore/toolbar-superiore.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    ReactiveFormsModule,
    ToolbarInferioreModule,
    ToolbarSuperioreModule
  ],
  declarations: [RegisterPage] 
})
export class RegisterPageModule {}
