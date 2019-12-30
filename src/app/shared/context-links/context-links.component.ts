import { Component, OnInit, Input } from "@angular/core";
import { Link } from "../common/interfaces";

@Component({
  selector: "app-context-links",
  templateUrl: "./context-links.component.html",
  styleUrls: ["./context-links.component.scss"]
})
export class ContextLinksComponent implements OnInit {
  @Input() links: Link[] = [];
  constructor() {}

  ngOnInit() {}
}
