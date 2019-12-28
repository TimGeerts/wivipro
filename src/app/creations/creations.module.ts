import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreationsRoutingModule } from './creations-routing.module';
import { CreationsComponent } from './creations.component';


@NgModule({
  declarations: [CreationsComponent],
  imports: [
    CommonModule,
    CreationsRoutingModule
  ]
})
export class CreationsModule { }
