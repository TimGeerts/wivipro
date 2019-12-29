import { NgModule } from "@angular/core";
import { BirthRoutingModule } from "./birth-routing.module";
import { BirthComponent } from "./birth.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [BirthComponent],
  imports: [SharedModule, BirthRoutingModule]
})
export class BirthModule {}
