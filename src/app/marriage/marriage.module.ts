import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MarriageComponent } from "./marriage.component";
import { MarriageRoutingModule } from "./marriage-routing.module";

@NgModule({
  declarations: [MarriageComponent],
  imports: [CommonModule, MarriageRoutingModule]
})
export class MarriageModule {}
