import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IMenuItem } from '../types/menu-item';

@Component({
  selector: 'wivipro-hamburger-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss'],
})
export class HamburgerMenuComponent {
  @Input() class = '';
  @Input() menuItems: IMenuItem[] = new Array<IMenuItem>();

  showMenu = false;
}
