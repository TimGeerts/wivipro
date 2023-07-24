import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalCardComponent } from '@wivipro/modules/shared/ui';

@Component({
  selector: 'wivipro-marriage',
  standalone: true,
  imports: [CommonModule, HorizontalCardComponent],
  templateUrl: './marriage.component.html',
})
export class MarriageComponent implements OnInit {
  private images = ['marriage500x500.png'];
  img = '';

  ngOnInit(): void {
    this.img = this.randomizeImage(this.images);
  }

  private randomizeImage(arr: string[]): string {
    const rngIdx = Math.floor(Math.random() * arr.length);
    return `assets/${arr[rngIdx]}`;
  }
}
