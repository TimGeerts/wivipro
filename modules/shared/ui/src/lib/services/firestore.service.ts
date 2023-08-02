import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  setDoc,
  doc,
  CollectionReference,
  DocumentReference,
  collectionData,
  docData,
  deleteDoc,
} from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  // generic converter
  // converter = <T>(): FirestoreDataConverter<T> => ({
  //   toFirestore: (data: any) => data,
  //   fromFirestore: (snapshot: QueryDocumentSnapshot) => snapshot.data() as T,
  // });

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
    return from(setDoc<T>(docRef, { ...obj })).pipe(
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
