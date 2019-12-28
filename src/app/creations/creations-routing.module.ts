import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreationsComponent } from './creations.component';

const routes: Routes = [{ path: '', component: CreationsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreationsRoutingModule { }
