import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalCardComponent } from '@wivipro/modules/shared/ui';

@Component({
  selector: 'wivipro-stickers',
  standalone: true,
  imports: [CommonModule, HorizontalCardComponent],
  templateUrl: './stickers.component.html',
})
export class StickersComponent implements OnInit {
  private images = ['stickers2.jpg'];
  img = '';

  ngOnInit(): void {
    this.img = this.randomizeImage(this.images);
  }

  private randomizeImage(arr: string[]): string {
    const rngIdx = Math.floor(Math.random() * arr.length);
    return `assets/${arr[rngIdx]}`;
  }
}
