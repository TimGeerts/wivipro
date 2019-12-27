import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HuwelijkComponent } from "./huwelijk/huwelijk.component";

const routes: Routes = [{ path: "huwelijk", component: HuwelijkComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
