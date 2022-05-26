import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { ToolbarInferioreComponent } from 'src/app/components/toolbar-inferiore/toolbar-inferiore.component';
import { ToolbarSuperioreComponent } from 'src/app/components/toolbar-superiore/toolbar-superiore.component';
import { ToolbarInferioreModule } from 'src/app/components/toolbar-inferiore/toolbar-inferiore.module';
import { ToolbarSuperioreModule } from 'src/app/components/toolbar-superiore/toolbar-superiore.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ToolbarInferioreModule,
    ToolbarSuperioreModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
