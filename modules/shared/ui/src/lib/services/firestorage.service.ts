import { Injectable } from '@angular/core';
import {
  getDownloadURL,
  ref,
  Storage,
  uploadBytes,
} from '@angular/fire/storage';
import { deleteObject } from 'firebase/storage';
import { from, Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FireStorageService {
  constructor(private readonly storage: Storage) {}

  async upload(file: File, path = 'gallery'): Promise<string> {
    const tmpDate = new Date();
    const rngSeed = tmpDate.getTime();
    let fileName = file.name.replace(/\s/g, '').toLowerCase();
    fileName = `${fileName}-${rngSeed}`;
    const storageRef = ref(this.storage, `uploads/${path}/${fileName}`);
    await uploadBytes(storageRef, file);
    return fileName;
    // return getDownloadURL(storageRef);
  }

  async removeFromGallery(fileName: string): Promise<void> {
    const storageRef = ref(this.storage, `uploads/gallery/${fileName}`);
    const thumbNailStorageRef = ref(
      this.storage,
      `uploads/gallery/thumbs/${fileName}_150x150`
    );
    await deleteObject(thumbNailStorageRef).catch((e) => console.error(e));
    return await deleteObject(storageRef);
  }

  isThumbNailCreated(fileName: string): Observable<string> {
    const storageRef = ref(this.storage, `uploads/gallery/thumbs/${fileName}`);
    return from(getDownloadURL(storageRef)).pipe(
      retry({ count: 10, delay: 1000 })
    );
  }
}
