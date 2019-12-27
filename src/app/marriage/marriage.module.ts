import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MarriageComponent } from "./marriage.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: MarriageComponent
  }
];

@NgModule({
  declarations: [MarriageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class MarriageModule {}
