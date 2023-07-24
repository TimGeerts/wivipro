import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalCardComponent } from '@wivipro/modules/shared/ui';

@Component({
  selector: 'wivipro-gifts',
  standalone: true,
  imports: [CommonModule, HorizontalCardComponent],
  templateUrl: './gifts.component.html',
})
export class GiftsComponent implements OnInit {
  private images = [
    'gifts.jpg',
    'geschenken 1.jpg',
    'pampertaart-eenhoorn.jpg',
    'parfumwitrosemeter.jpg',
  ];
  img = '';

  ngOnInit(): void {
    this.img = this.randomizeImage(this.images);
  }

  private randomizeImage(arr: string[]): string {
    const rngIdx = Math.floor(Math.random() * arr.length);
    return `assets/${arr[rngIdx]}`;
  }
}
