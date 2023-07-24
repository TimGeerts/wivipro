import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StickersComponent } from './stickers/stickers.component';
import { GiftsComponent } from './gifts/gifts.component';
import { MarriageComponent } from './marriage/marriage.component';
import { BirthComponent } from './birth/birth.component';
import { SugarComponent } from './sugar/sugar.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'wivipro-home',
  standalone: true,
  imports: [
    CommonModule,
    AboutComponent,
    BirthComponent,
    MarriageComponent,
    StickersComponent,
    SugarComponent,
    GiftsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
