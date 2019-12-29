import { Component, OnInit } from "@angular/core";
import { ContextLink } from "../shared/context-links/context-link.interface";

@Component({
  selector: "app-birth",
  templateUrl: "./birth.component.html"
})
export class BirthComponent implements OnInit {
  contextLinks: ContextLink[] = [
    { label: "Belarto", url: "https://www.belarto.be/" },
    { label: "Buromac", url: "https://www.buromac.com/" },
    { label: "Kaartjes en Co", url: "https://www.kaartjesenco.be/" },
    { label: "BB Collections", url: "https://www.bb-collections.com/nl" },
    { label: "De Bock", url: "https://de-bock.be/" }
  ];
  constructor() {}

  ngOnInit() {}
}
