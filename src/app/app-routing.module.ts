import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HuwelijkComponent } from "./huwelijk/huwelijk.component";

const routes: Routes = [
  {
    path: "huwelijk",
    loadChildren: () =>
      import("./marriage/marriage.module").then(m => m.MarriageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
