import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { ImageGridItem } from '../types/image-grid-item';
import { Observable, Subject, map, of, takeUntil } from 'rxjs';
import { InfiniteScrolling } from './services/infinite-scrolling.service';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from '../services/modal.service';
import { AddImageComponent } from './add-image/add-image.component';
import { ImageGridItemUpload } from '../types/image-grid-item-upload';

@Component({
  selector: 'wivipro-image-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.scss'],
})
export class ImageGridComponent implements OnInit, OnDestroy {
  @Input() images$!: Observable<ImageGridItem[]>;
  @Input() manage = false;

  @Output() addImage: EventEmitter<ImageGridItemUpload> =
    new EventEmitter<ImageGridItemUpload>();
  // @Output() editImage: EventEmitter<IGalleryImage> =
  //   new EventEmitter<IGalleryImage>();
  // @Output() deleteImage: EventEmitter<IGalleryImage> =
  //   new EventEmitter<IGalleryImage>();

  private readonly unsubscribe$: Subject<void> = new Subject();
  images: ImageGridItem[] = new Array<ImageGridItem>();
  imgData: ImageGridItem[] = new Array<ImageGridItem>();
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
    this.images$.pipe(takeUntil(this.unsubscribe$)).subscribe((images) => {
      this.images = images;
      this.imgData = new Array<ImageGridItem>();
      this.loadGrid(this.startLimit, this.endLimit);
    });

    this.scrollService
      .getObservable()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((s) => {
        if (s) {
          this.startLimit = this.startLimit + 10;
          this.endLimit = this.endLimit + 10;
          this.loadGrid(this.startLimit, this.endLimit);
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private loadGrid(start: number, end: number) {
    of(this.images.slice(start, end))
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (r) => {
          // console.log(start, end, r);
          this.imgData = this.imgData.concat(r);
          const clear = setInterval(() => {
            const target = document.querySelector(`#gimg${end}`);
            if (target) {
              clearInterval(clear);
              this.scrollService.setObserver().observe(target);
            }
          }, 100);
        },
        error: (e) => console.error(e),
      });
  }

  // getImages(start: number, end: number) {
  //   this.mockImgService(start, end)
  //     .pipe(takeUntil(this.unsubscribe$))
  //     .subscribe(
  //       (r) => {
  //         this.imgData = this.imgData.concat(r);
  //         const clear = setInterval(() => {
  //           const target = document.querySelector(`#gimg${end}`);
  //           if (target) {
  //             clearInterval(clear);
  //             this.scrollService.setObserver().observe(target);
  //           }
  //         }, 100);
  //       },
  //       (err) => {
  //         console.log(err);
  //       }
  //     );
  // }

  // mockImgService(start: number, end: number): Observable<IImageGridItem[]> {
  //   return of(this.images.slice(start, end));
  // }

  // imgPager(start: number, end: number): Observable<IImageGridItem[]> {
  //   return this.images$.pipe()
  // }

  // image CRUD functions
  add(): void {
    console.log('add');
    this.modalService
      .showOffCanvas<AddImageComponent, ImageGridItemUpload>(AddImageComponent)
      .pipe(map((r) => r.Data))
      .subscribe((r) => {
        this.addImage.emit(r);
      });
  }

  edit(e: Event, img: ImageGridItem): void {
    console.log('edit ', img);
    e.stopPropagation();
  }

  delete(e: Event, img: ImageGridItem): void {
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
