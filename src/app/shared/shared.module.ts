import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContextLinksComponent } from "./context-links/context-links.component";

@NgModule({
  declarations: [ContextLinksComponent],
  imports: [CommonModule],
  exports: [ContextLinksComponent, CommonModule]
})
export class SharedModule {}
