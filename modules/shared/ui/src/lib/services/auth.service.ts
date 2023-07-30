import { inject, Injectable, OnDestroy } from '@angular/core';
import {
  Auth,
  authState,
  signInWithEmailAndPassword,
  signOut,
  User,
  UserCredential,
} from '@angular/fire/auth';
import {
  BehaviorSubject,
  from,
  Observable,
  ReplaySubject,
  Subject,
  Subscription,
} from 'rxjs';
import { IUser } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  private auth: Auth = inject(Auth);
  $loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  $currentUser: Subject<IUser> = new ReplaySubject<IUser>(1);
  authState$ = authState(this.auth);
  authStateSubscription!: Subscription;

  constructor() {
    this.authStateSubscription = this.authState$.subscribe(
      (aUser: User | null) => {
        if (aUser) {
          const usr: IUser = {
            uid: aUser.uid,
            displayName: aUser.displayName,
            email: aUser.email,
          };
          localStorage.setItem('user', JSON.stringify(usr));
          this.$loggedIn.next(true);
          this.$currentUser.next(usr);
        } else {
          localStorage.removeItem('user');
          this.$loggedIn.next(false);
        }
      }
    );
  }
  ngOnDestroy(): void {
    this.authStateSubscription && this.authStateSubscription.unsubscribe();
  }

  // Sign in
  public signIn(email: string, password: string): Observable<UserCredential> {
    const loginPromise = signInWithEmailAndPassword(this.auth, email, password);
    return from(loginPromise);
  }

  // Sign out
  public signOut() {
    signOut(this.auth);
  }
}
