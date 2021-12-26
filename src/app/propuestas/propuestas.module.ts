import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropuestasRoutingModule } from './propuestas-routing.module';
import { MainComponent } from './pages/main/main.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    MainComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PropuestasRoutingModule
  ]
})
export class PropuestasModule { }
