// source: https://codepen.io/3psy0n/pen/LYpajmX

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'wivipro-horizontal-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './horizontal-card.component.html',
  styleUrls: ['./horizontal-card.component.scss'],
})
export class HorizontalCardComponent {
  @Input() class = '';
  @Input() type: 'dark' | 'light' = 'light';
  @Input() cardTitle = '';
  @Input() titleClass = '';
  @Input() img = '';
}
