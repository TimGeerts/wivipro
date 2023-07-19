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
  private imagesSugar = ['de bock.jpg', 'de bock 1.jpg'];
  private imagesGifts = [
    'gifts.jpg',
    'geschenken 1.jpg',
    'pampertaart-eenhoorn.jpg',
    'parfumwitrosemeter.jpg',
  ];
  private imagesStickers = ['stickers2.jpg'];

  private imagesPresentation = ['presentatiemateriaal.jpg'];

  imgMarriage = '';
  imgBirth = '';
  imgSugar = '';
  imgPresentation = '';
  imgGift = '';
  imgSticker = '';

  ngOnInit(): void {
    this.imgMarriage = this.randomizeImage(this.imagesMarriage);
    this.imgBirth = this.randomizeImage(this.imagesBirth);
    this.imgSugar = this.randomizeImage(this.imagesSugar);
    this.imgPresentation = this.randomizeImage(this.imagesPresentation);
    this.imgGift = this.randomizeImage(this.imagesGifts);
    this.imgSticker = this.randomizeImage(this.imagesStickers);
  }

  private randomizeImage(arr: string[]): string {
    const rngIdx = Math.floor(Math.random() * arr.length);
    return `assets/${arr[rngIdx]}`;
  }
}
