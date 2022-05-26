import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ToolbarSuperioreComponent } from './toolbar-superiore.component';
import { RouterModule } from '@angular/router';
import { menuController } from "@ionic/core";



@NgModule({
  declarations: [ToolbarSuperioreComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule
  ],
  exports: [ToolbarSuperioreComponent]
})
export class ToolbarSuperioreModule { }
