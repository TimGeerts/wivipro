import { Component, OnInit } from "@angular/core";
import { Link } from "../shared/common/interfaces";

@Component({
  selector: "app-birth",
  templateUrl: "./birth.component.html",
  styleUrls: ["./birth.component.scss"]
})
export class BirthComponent implements OnInit {
  contextLinks: Link[] = [
    { label: "Belarto", url: "https://www.belarto.be/" },
    { label: "Buromac", url: "https://www.buromac.com/" },
    { label: "Kaartjes en Co", url: "https://www.kaartjesenco.be/" },
    { label: "BB Collections", url: "https://www.bb-collections.com/nl" },
    { label: "De Bock", url: "https://de-bock.be/" }
  ];
  constructor() {}

  ngOnInit() {}
}
