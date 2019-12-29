import { Component, OnInit } from "@angular/core";
import { ContextLink } from "../shared/context-links/context-link.interface";

@Component({
  selector: "app-marriage",
  templateUrl: "./marriage.component.html"
})
export class MarriageComponent implements OnInit {
  contextLinks: ContextLink[] = [
    { label: "Belarto", url: "https://www.belarto.be/" },
    { label: "Buromac", url: "https://www.buromac.com/" }
  ];

  constructor() {}

  ngOnInit() {}
}
