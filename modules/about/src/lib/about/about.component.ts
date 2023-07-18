import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalCardComponent } from '@wivipro/modules/shared/ui';

@Component({
  selector: 'wivipro-about',
  standalone: true,
  imports: [CommonModule, HorizontalCardComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {}
