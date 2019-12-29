import { Component, OnInit, Input } from "@angular/core";
import { ContextLink } from "./context-link.interface";

@Component({
  selector: "app-context-links",
  templateUrl: "./context-links.component.html",
  styleUrls: ["./context-links.component.scss"]
})
export class ContextLinksComponent implements OnInit {
  @Input() links: ContextLink[] = [];
  constructor() {}

  ngOnInit() {}
}
