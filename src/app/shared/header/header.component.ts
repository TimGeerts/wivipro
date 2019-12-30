import { Component, OnInit } from "@angular/core";
import { Link } from "../common/interfaces";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  menu: Link[];
  constructor() {}

  ngOnInit() {
    this.initMenu();
  }

  initMenu(): void {
    this.menu = [
      { label: "Huwelijk", route: "/huwelijk" },
      { label: "Geboorte", route: "/geboorte" },
      { label: "Onze creaties", route: "/manden" },
      { label: "Webwinkel", url: "https://www.wivipro-webshop.be" },
      { label: "Contact", route: "/contact" },
      { label: "Groothandel", url: "https://www.belarto.be/" }
    ];
  }
}
