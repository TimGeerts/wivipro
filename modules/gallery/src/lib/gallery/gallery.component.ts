import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AuthService,
  IGalleryItem,
  ImageGridComponent,
} from '@wivipro/modules/shared/ui';

@Component({
  selector: 'wivipro-gallery',
  standalone: true,
  imports: [CommonModule, ImageGridComponent],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  gallery: IGalleryItem[] = new Array<IGalleryItem>();

  constructor(public authService: AuthService) {}
  // modalOptions: NgbModalOptions = { size: 'lg' };

  // constructor(
  //   private modalService: ModalService,
  //   private authService: AuthService
  // ) {
  //   this.authService.isAdmin.subscribe((isAdmin) => {
  //     this.isAdmin = isAdmin;
  //     this.canmanage = isAdmin;
  //   });
  // }

  ngOnInit(): void {
    this.initGallery();
  }

  private initGallery(): void {
    // this.getImages();
    console.log('init gallery');
    for (let i = 0; i < 100; i++) {
      this.gallery.push({
        fileName: `https://picsum.photos/150?random=${i}`,
        fileLarge: `https://picsum.photos/500?random=${i}`,
        description:
          'This is a short description of the picture you are currently viewing.',
      });
    }
  }
}
