import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalCardComponent } from '@wivipro/modules/shared/ui';

@Component({
  selector: 'wivipro-sugar',
  standalone: true,
  imports: [CommonModule, HorizontalCardComponent],
  templateUrl: './sugar.component.html',
})
export class SugarComponent implements OnInit {
  private images = ['de bock.jpg', 'de bock 1.jpg'];
  img = '';

  ngOnInit(): void {
    this.img = this.randomizeImage(this.images);
  }

  private randomizeImage(arr: string[]): string {
    const rngIdx = Math.floor(Math.random() * arr.length);
    return `assets/${arr[rngIdx]}`;
  }
}
