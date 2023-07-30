import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {
  AuthService,
  HamburgerMenuComponent,
  HorizontalMenuComponent,
  IMenuItem,
} from '@wivipro/modules/shared/ui';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HorizontalMenuComponent,
    HamburgerMenuComponent,
  ],
  selector: 'wivipro-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Wivipro';
  uid?: string;
  menuItems: IMenuItem[] = new Array<IMenuItem>();
  menuItemsRight: IMenuItem[] = new Array<IMenuItem>();
  hamburgerMenuItems: IMenuItem[] = new Array<IMenuItem>();

  constructor(private router: Router, public authService: AuthService) {}

  ngOnInit(): void {
    this.uid = localStorage.getItem('user') || '';
    this.initMenu();
  }

  goHome(): void {
    this.router.navigate(['home']);
  }

  signOut(): void {
    this.authService.signOut();
  }

  private initMenu(): void {
    this.menuItems = [
      {
        label: "Foto's",
        routerLink: '/gallery',
      },

      {
        label: 'Maak een afspraak',
        extLink: 'https://calendly.com/wivipro/afspraak',
      },
    ];
    this.menuItemsRight = [
      {
        label: 'Webshop',
        extLink: 'http://www.wivipro-webshop.be',
        icon: 'fa-solid fa-cart-shopping',
      },
    ];

    this.hamburgerMenuItems = [...this.menuItems, ...this.menuItemsRight];
  }
}
