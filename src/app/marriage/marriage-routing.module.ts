import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MarriageComponent } from "./marriage.component";

const routes: Routes = [{ path: "", component: MarriageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarriageRoutingModule {}
