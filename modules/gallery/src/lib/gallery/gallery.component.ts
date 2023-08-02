import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AuthService,
  FireStorageService,
  FirestoreService,
  ImageGridItem,
  ImageGridComponent,
  ImageGridItemUpload,
} from '@wivipro/modules/shared/ui';
import { Observable, Subscription, of, take } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wivipro-gallery',
  standalone: true,
  imports: [CommonModule, ImageGridComponent],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  loaded = false;
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
    this.firestorageService.upload(item.file).then((url) => {
      const gridItem = new ImageGridItem(item.description, url);
      this.firestoreService.setDocument<ImageGridItem>(
        'gallery',
        gridItem.key,
        gridItem
      );
    });
  };

  private initGallery(): void {
    this.gallery$ =
      this.firestoreService.getCollection<ImageGridItem>('gallery');
  }

  private mockGallery() {
    const mockArr = new Array<ImageGridItem>();
    for (let i = 0; i < 100; i++) {
      mockArr.push({
        key: i.toString(),
        fileSmall: `https://picsum.photos/150?random=${i}`,
        fileLarge: `https://picsum.photos/500?random=${i}`,
        description:
          'This is a short description of the picture you are currently viewing.',
      });
    }
    this.gallery$ = of(mockArr);
  }
}
