import { Injectable } from '@angular/core';
import {
  Firestore,
  getDoc,
  getDocs,
  collection,
  QuerySnapshot,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  setDoc,
  doc,
  query,
  CollectionReference,
  DocumentReference,
  collectionData,
  addDoc,
  docData,
} from '@angular/fire/firestore';
import { Observable, from, EMPTY, of } from 'rxjs';
import { map, take } from 'rxjs/operators';

import {
  getDownloadURL,
  ref,
  Storage,
  uploadBytes,
} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class FireStorageService {
  constructor(private readonly storage: Storage) {}

  async upload(file: File, path = 'gallery'): Promise<string> {
    const storageRef = ref(
      this.storage,
      `uploads/${path}/${file.name}-${new Date().toISOString()}`
    );
    await uploadBytes(storageRef, file);
    return getDownloadURL(storageRef);
  }
}

// uploadDocument(file: File, path = 'gallery') {
//   const storageRef = ref(
//     this.storage,
//     `uploads/${path}/${file.name}-${new Date().toISOString()}`
//   );

//   uploadBytes(storageRef, file)

//   await uploadBytes(storageRef, file);
//   const url = await getDownloadURL(storageRef);

//   const retVal = from(uploadBytes(storageRef, file)).pipe(
//     take(1),
//     map((x) => from(getDownloadURL(storageRef)))
//   );
//     return retVal;
// }
