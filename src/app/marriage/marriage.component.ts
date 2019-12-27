import { Component, OnInit } from "@angular/core";
import { ContextLink } from "../types/core";

@Component({
  selector: "app-marriage",
  templateUrl: "./marriage.component.html"
})
export class MarriageComponent implements OnInit {
  contextLinks: ContextLink[] = [
    { label: "Buromac", url: "https://www.buromac.com/" },
    { label: "Belarto", url: "https://www.belarto.be/" }
  ];

  constructor() {}

  ngOnInit() {}
}
