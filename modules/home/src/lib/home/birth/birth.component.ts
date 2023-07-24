import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalCardComponent } from '@wivipro/modules/shared/ui';

@Component({
  selector: 'wivipro-birth',
  standalone: true,
  imports: [CommonModule, HorizontalCardComponent],
  templateUrl: './birth.component.html',
})
export class BirthComponent implements OnInit {
  private images = ['baby500x500.jpg', 'birth_feet.jpg'];
  img = '';

  ngOnInit(): void {
    this.img = this.randomizeImage(this.images);
  }

  private randomizeImage(arr: string[]): string {
    const rngIdx = Math.floor(Math.random() * arr.length);
    return `assets/${arr[rngIdx]}`;
  }
}
