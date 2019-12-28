import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BirthRoutingModule } from './birth-routing.module';
import { BirthComponent } from './birth.component';


@NgModule({
  declarations: [BirthComponent],
  imports: [
    CommonModule,
    BirthRoutingModule
  ]
})
export class BirthModule { }
