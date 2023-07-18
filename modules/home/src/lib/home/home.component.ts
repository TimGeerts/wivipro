import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalCardComponent } from '@wivipro/modules/shared/ui';

@Component({
  selector: 'wivipro-home',
  standalone: true,
  imports: [CommonModule, HorizontalCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private imagesMarriage = ['marriage500x500.png'];
  private imagesBirth = ['baby500x500.jpg', 'birth_feet.jpg'];
  private imagesPresentation = ['presentatiemateriaal.jpg'];
  private imagesGifts = ['gifts.jpg', 'sugar.jpg'];

  imgMarriage = '';
  imgBirth = '';
  imgPresentation = '';
  imgGift = '';

  ngOnInit(): void {
    this.imgMarriage = this.randomizeImage(this.imagesMarriage);
    this.imgBirth = this.randomizeImage(this.imagesBirth);
    this.imgPresentation = this.randomizeImage(this.imagesPresentation);
    this.imgGift = this.randomizeImage(this.imagesGifts);
  }

  private randomizeImage(arr: string[]): string {
    const rngIdx = Math.floor(Math.random() * arr.length);
    return `assets/${arr[rngIdx]}`;
  }
}
