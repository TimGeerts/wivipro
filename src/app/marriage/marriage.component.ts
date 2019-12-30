import { Component, OnInit } from "@angular/core";
import { Link } from "../shared/common/interfaces";

@Component({
  selector: "app-marriage",
  templateUrl: "./marriage.component.html"
})
export class MarriageComponent implements OnInit {
  contextLinks: Link[] = [
    { label: "Belarto", url: "https://www.belarto.be/" },
    { label: "Buromac", url: "https://www.buromac.com/" }
  ];

  constructor() {}

  ngOnInit() {}
}
