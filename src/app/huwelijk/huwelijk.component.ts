import { Component, OnInit } from "@angular/core";
import { ContextLink } from "../types/core";

@Component({
  selector: "app-huwelijk",
  templateUrl: "./huwelijk.component.html",
  styleUrls: ["./huwelijk.component.scss"]
})
export class HuwelijkComponent implements OnInit {
  contextLinks: ContextLink[] = [
    { label: "Buromac", url: "https://www.buromac.com/" },
    { label: "Belarto", url: "https://www.belarto.be/" }
  ];

  constructor() {}

  ngOnInit() {}
}
