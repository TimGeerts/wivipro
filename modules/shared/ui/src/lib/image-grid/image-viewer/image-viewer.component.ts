import { Component, HostListener, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { IImageGridItem } from '../../types/image-grid-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'wivipro-image-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-viewer.component.html',
})
export class ImageViewerComponent implements OnInit {
  images!: IImageGridItem[];
  index = 0;
  max = 0;
  currentImage?: IImageGridItem;

  private _img$ = new Subject<IImageGridItem>();
  readonly img$ = this._img$.asObservable();

  @HostListener('keydown.ArrowLeft') keyLeft() {
    this.prev();
  }
  @HostListener('keydown.ArrowRight') keyRight() {
    this.next();
  }

  constructor(public activeModal: NgbActiveModal) {
    this.img$.subscribe((img) => {
      this.currentImage = img;
    });
  }

  ngOnInit(): void {
    this.max = this.images?.length ?? 0;
    this.setActiveImage();
  }

  prev(): void {
    this.index = this.index > 0 ? this.index - 1 : this.max - 1;
    this.setActiveImage();
  }

  next(): void {
    this.index = this.index < this.max - 1 ? this.index + 1 : 0;
    this.setActiveImage();
  }

  private setActiveImage(): void {
    this.currentImage = undefined;
    this._img$.next(this.images[this.index]);
  }
}
