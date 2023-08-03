import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AuthService,
  FireStorageService,
  FirestoreService,
  ImageGridItem,
  ImageGridComponent,
  ImageGridItemUpload,
  HorizontalCardComponent,
} from '@wivipro/modules/shared/ui';
import { Observable, Subscription, of, take, map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wivipro-gallery',
  standalone: true,
  imports: [CommonModule, ImageGridComponent, HorizontalCardComponent],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  STORAGEBUCKET =
    'https://storage.googleapis.com/wivipro-6fdd8.appspot.com/uploads/gallery/';

  addingNewImage = false;
  gallerySubscription!: Subscription;
  gallery$!: Observable<ImageGridItem[]>;
  gallery: ImageGridItem[] = new Array<ImageGridItem>();

  constructor(
    public authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private firestorageService: FireStorageService,
    private firestoreService: FirestoreService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.pipe(take(1)).subscribe((data) => {
      if (data.get('debug')) {
        this.mockGallery();
      } else {
        this.initGallery();
      }
    });
  }

  addImage = (item: ImageGridItemUpload): void => {
    this.addingNewImage = true;
    this.firestorageService.upload(item.file).then((filename) => {
      const url = `${this.STORAGEBUCKET}${filename}`;
      const thumburl = `${this.STORAGEBUCKET}thumbs/${filename}_150x150`;
      const gridItem = new ImageGridItem(item.description, url, thumburl);
      // fake delay to show spinner AND allow firebase to resize the uploaded image
      setTimeout(() => {
        this.firestoreService.setDocument<ImageGridItem>(
          'gallery',
          gridItem.key,
          gridItem
        );
        this.addingNewImage = false;
      }, 5000);
    });
  };

  editImage = (item: ImageGridItem): void => {
    if (!item) return;
    this.firestoreService.setDocument<ImageGridItem>('gallery', item.key, item);
  };

  deleteImage = (item: ImageGridItem): void => {
    const firestoreKey = item.key;
    const firestorageFile = item.fileLarge.split('/').pop();
    if (firestorageFile) {
      this.firestorageService
        .removeFromGallery(firestorageFile)
        .then(() => {
          this.firestoreService
            .removeDocument(`gallery/${firestoreKey}`)
            .pipe(take(1))
            .subscribe(() => {
              //
            });
        })
        .catch((e) => console.error(e));
    }
  };

  private initGallery(): void {
    this.gallery$ = this.firestoreService
      .getCollection<ImageGridItem>('gallery')
      .pipe(map((data) => data.sort((a, b) => (a.key > b.key ? -1 : 0))));
  }

  private mockGallery() {
    const mockArr = new Array<ImageGridItem>();
    for (let i = 0; i < 100; i++) {
      mockArr.push({
        key: i.toString(),
        fileSmall: `https://picsum.photos/150?random=${i}`,
        fileLarge: `https://picsum.photos/1000?random=${i}`,
        description:
          'This is a short description of the picture you are currently viewing.',
      });
    }
    this.gallery$ = of(mockArr);
  }
}
