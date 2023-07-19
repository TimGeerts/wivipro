import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {
  HamburgerMenuComponent,
  HorizontalMenuComponent,
  IMenuItem,
} from '@wivipro/modules/shared/ui';

@Component({
  standalone: true,
  imports: [RouterModule, HorizontalMenuComponent, HamburgerMenuComponent],
  selector: 'wivipro-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Wivipro';
  menuItems: IMenuItem[] = new Array<IMenuItem>();
  menuItemsRight: IMenuItem[] = new Array<IMenuItem>();
  hamburgerMenuItems: IMenuItem[] = new Array<IMenuItem>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initMenu();
  }

  goHome(): void {
    this.router.navigate(['home']);
  }

  private initMenu(): void {
    this.menuItems = [
      {
        label: "Foto's",
        routerLink: '/creations',
      },

      {
        label: 'Maak een afspraak',
        extLink: 'https://calendly.com/wivipro/afspraak',
      },
    ];
    this.menuItemsRight = [
      // {
      //   label: 'Maak een afspraak',
      //   extLink: 'https://calendly.com/wivipro/afspraak',
      //   icon: 'fa-regular fa-calendar',
      // },
      {
        label: 'Webshop',
        extLink: 'http://www.wivipro-webshop.be',
        icon: 'fa-solid fa-cart-shopping',
      },
    ];
    this.hamburgerMenuItems = [...this.menuItems, ...this.menuItemsRight];
  }
}
