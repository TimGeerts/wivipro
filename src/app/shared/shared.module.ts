import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContextLinksComponent } from "./context-links/context-links.component";
import { HeaderComponent } from "./header/header.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [ContextLinksComponent, HeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [ContextLinksComponent, CommonModule, HeaderComponent]
})
export class SharedModule {}
