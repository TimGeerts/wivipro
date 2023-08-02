import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AuthService,
  FireStorageService,
  FirestoreService,
  IImageGridItem,
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
  gallery$!: Observable<IImageGridItem[]>;

  gallery: IImageGridItem[] = new Array<IImageGridItem>();

  constructor(
    public authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private firestorageService: FireStorageService,
    private firestoreService: FirestoreService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.pipe(take(1)).subscribe((data) => {
      console.log(data);
      if (data.get('debug')) {
        this.mockGallery();
      } else {
        this.initGallery();
      }
    });
  }

  addImage = (item: ImageGridItemUpload): void => {
    //handle uploading the file to firebase storage and saving the info to firestore

    this.firestorageService.upload(item.file).then((url) => {
      // this.firestoreService.addDocument<IImageGridItem>('gallery', {
      //   fileSmall: url,
      //   fileLarge: url,
      //   description: item.description,
      // });
      this.firestoreService.setDocument<IImageGridItem>('gallery', 'myid', {
        fileSmall: url,
        fileLarge: url,
        description: item.description,
      });
    });
  };

  private initGallery(): void {
    this.gallery$ =
      this.firestoreService.getCollection<IImageGridItem>('gallery');
  }

  private mockGallery() {
    const mockArr = new Array<IImageGridItem>();
    for (let i = 0; i < 100; i++) {
      mockArr.push({
        fileSmall: `https://picsum.photos/150?random=${i}`,
        fileLarge: `https://picsum.photos/500?random=${i}`,
        description:
          'This is a short description of the picture you are currently viewing.',
      });
    }
    this.gallery$ = of(mockArr);
  }
}
