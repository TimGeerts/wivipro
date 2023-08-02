// import { Injectable, OnDestroy, inject } from '@angular/core';
// import { Auth } from '@angular/fire/auth';
// import { Firestore, collectionData, collection, doc, addDoc,  } from '@angular/fire/firestore';
// import {
//   getDownloadURL,
//   ref,
//   Storage,
//   uploadBytes,
// } from '@angular/fire/storage';
// import { FileUpload } from '../types/file-upload';
// import { EMPTY, Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class FirestoreService implements OnDestroy {
//   private firestore: Firestore = inject(Firestore);
//   private basePath = 'uploads';

//   constructor(private readonly auth: Auth, private readonly storage: Storage) {
//    console.log('constructor');
//   }

//   ngOnDestroy(): void {
//     console.log('destroy');
//   }

//   async uploadFile(folder: string, fileUpload: FileUpload) {
//     if(!this.auth.currentUser) EMPTY;
//     const storageRef = ref(
//       this.storage,
//       `${folder}/${fileUpload.file.name}-${new Date().toISOString()}`
//     );
//     await uploadBytes(storageRef, fileUpload.file);
//     const url = await getDownloadURL(storageRef);

//     const taskCollection = collection(this.firestore, `tasks`);
//     const taskReference = await addDoc(taskCollection, { ...task });
//     await updateDoc(taskReference, 'id', taskReference.id);

//     const uploadsCollection = collection(this.firestore, `${this.basePath}/${folder}`);
//     const uploadReference = addDoc(uploadsCollection, { })

//     const collectionRef = doc(this.firestore, uploadsCollection, '')
//   }
// }

//TODO possibly deprecated - clean up "soon"
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
  deleteDoc,
} from '@angular/fire/firestore';
import { Observable, from, EMPTY, of } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  // generic converter
  converter = <T>(): FirestoreDataConverter<T> => ({
    toFirestore: (data: any) => data,
    fromFirestore: (snapshot: QueryDocumentSnapshot) => snapshot.data() as T,
  });

  // actions
  getCollection<T>(path: string): Observable<T[]> {
    const colRef = collection(this.firestore, path) as CollectionReference<T>;
    return collectionData(colRef);
  }

  getDocument<T>(path: string): Observable<T> {
    const docRef = doc(this.firestore, path) as DocumentReference<T>;
    return docData(docRef);
  }

  setDocument<T>(path: string, id: string, obj: T): Observable<T> {
    const docRef = doc(this.firestore, path, id) as DocumentReference<T>;
    return from(setDoc<T>(docRef, obj)).pipe(
      take(1),
      map(() => obj)
    );
  }

  addDocument<T>(path: string, obj: T): Observable<T> {
    const colRef = collection(this.firestore, path).withConverter(
      this.converter<T>()
    );
    return from(addDoc<T>(colRef, obj)).pipe(
      take(1),
      map(() => obj)
    );
  }

  // TODO update document

  removeDocument(path: string) {
    const docRef = doc(this.firestore, path);
    return from(deleteDoc(docRef)).pipe(take(1));
  }
}
