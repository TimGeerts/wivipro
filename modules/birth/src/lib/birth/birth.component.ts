import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalCardComponent } from '@wivipro/modules/shared/ui';

@Component({
  selector: 'wivipro-birth',
  standalone: true,
  imports: [CommonModule, HorizontalCardComponent],
  templateUrl: './birth.component.html',
  styleUrls: ['./birth.component.css'],
})
export class BirthComponent {}
