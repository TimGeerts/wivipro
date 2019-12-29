import { NgModule } from "@angular/core";
import { MarriageComponent } from "./marriage.component";
import { MarriageRoutingModule } from "./marriage-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [MarriageComponent],
  imports: [SharedModule, MarriageRoutingModule]
})
export class MarriageModule {}
