import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IGalleryItem } from '../types/gallery-item';
import { Observable, Subject, of, takeUntil } from 'rxjs';
import { InfiniteScrolling } from './services/infinite-scrolling.service';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'wivipro-image-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.scss'],
})
export class ImageGridComponent implements OnInit, OnDestroy {
  @Input() images: IGalleryItem[] = new Array<IGalleryItem>();
  @Input() manage = false;

  // @Output() addImage: EventEmitter<void> = new EventEmitter<void>();
  // @Output() editImage: EventEmitter<IGalleryImage> =
  //   new EventEmitter<IGalleryImage>();
  // @Output() deleteImage: EventEmitter<IGalleryImage> =
  //   new EventEmitter<IGalleryImage>();

  private readonly unsubscribe$: Subject<void> = new Subject();
  imgData: IGalleryItem[] = new Array<IGalleryItem>();
  startLimit = 0;
  endLimit = 10;
  modalOptions: NgbModalOptions = {
    size: 'lg',
    modalDialogClass: 'image-viewer',
  };

  constructor(
    private scrollService: InfiniteScrolling,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.getImages(this.startLimit, this.endLimit);
    this.scrollService
      .getObservable()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((s) => {
        if (s) {
          this.startLimit = this.startLimit + 10;
          this.endLimit = this.endLimit + 10;
          this.getImages(this.startLimit, this.endLimit);
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  getImages(start: number, end: number) {
    this.mockImgService(start, end)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (r) => {
          this.imgData = this.imgData.concat(r);
          const clear = setInterval(() => {
            const target = document.querySelector(`#gimg${end}`);
            if (target) {
              clearInterval(clear);
              this.scrollService.setObserver().observe(target);
            }
          }, 100);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  mockImgService(start: number, end: number): Observable<IGalleryItem[]> {
    return of(this.images.slice(start, end));
  }

  add(): void {
    console.log('add');
  }

  edit(e: Event, img: IGalleryItem): void {
    console.log('edit ', img);
    e.stopPropagation();
  }

  delete(e: Event, img: IGalleryItem): void {
    console.log('delete ', img);
    e.stopPropagation();
  }

  show(index: number): void {
    console.log('show ', index);

    const config = {
      images: this.imgData,
      index,
    };

    this.modalService.show<ImageViewerComponent, boolean>(
      ImageViewerComponent,
      config,
      this.modalOptions
    );
  }
}
