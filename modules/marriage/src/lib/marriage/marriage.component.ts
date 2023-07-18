import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalCardComponent } from '@wivipro/modules/shared/ui';

@Component({
  selector: 'wivipro-marriage',
  standalone: true,
  imports: [CommonModule, HorizontalCardComponent],
  templateUrl: './marriage.component.html',
  styleUrls: ['./marriage.component.css'],
})
export class MarriageComponent {}
