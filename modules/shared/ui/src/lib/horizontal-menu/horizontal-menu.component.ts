import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IMenuItem } from '../types/menu-item';

@Component({
  selector: 'wivipro-horizontal-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './horizontal-menu.component.html',
  styleUrls: ['./horizontal-menu.component.scss'],
})
export class HorizontalMenuComponent {
  @Input() class = '';
  @Input() right = false;
  @Input() menuItems: IMenuItem[] = new Array<IMenuItem>();
}
