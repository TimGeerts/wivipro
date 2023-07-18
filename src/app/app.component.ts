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
        label: 'Over ons',
        routerLink: '/about',
      },
      {
        label: 'Huwelijk',
        routerLink: '/marriage',
      },
      {
        label: 'Geboorte',
        routerLink: '/birth',
      },
      {
        label: 'Creaties',
        routerLink: '/creations',
      },
      {
        label: 'Geschenken',
        routerLink: '/gifts',
      },
      {
        label: 'Webshop',
        extLink: 'http://www.wivipro-webshop.be',
      },
    ];
  }
}
