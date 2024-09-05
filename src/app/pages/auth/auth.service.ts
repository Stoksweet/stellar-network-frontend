import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model';

import { 
  Auth, 
  GoogleAuthProvider, 
  authState, 
  signInWithPopup, 
  signInAnonymously, 
  user, 
  sendSignInLinkToEmail, 
  isSignInWithEmailLink, 
  signInWithEmailLink,
  multiFactor, 
  PhoneAuthProvider, 
  PhoneMultiFactorGenerator,
  RecaptchaVerifier,
  getMultiFactorResolver
} from "@angular/fire/auth";
import { BehaviorSubject, Observable, of } from 'rxjs';
import { first, switchMap, take } from 'rxjs/operators';

import { Device } from '@capacitor/device';
import { AlertController, ToastController } from '@ionic/angular';

import { Firestore, collection, docData, docSnapshots, getDoc, updateDoc } from '@angular/fire/firestore';
import { doc, setDoc } from '@angular/fire/firestore';
import { onAuthStateChanged } from 'firebase/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
    // private afAuth: Auth = inject(Auth);
    authState$ = authState(this.afAuth);
    private db: Firestore = inject(Firestore);

    // user: User;
    userStateChange$: Observable<User> = ({} as Observable<User>);
    public authenticated: any;
    user$: BehaviorSubject<any> = new BehaviorSubject(null);

    showEmailInput = true;
    showErrorMessage = false;
    user: any;

    constructor(
      private router: Router,
      private toastCtrl: ToastController,
      private alertCtrl: AlertController,
      private afAuth: Auth
    ) { 

      user(this.afAuth).subscribe(user => {
        if(user === null) {
          this.authenticated = false;
          this.user$.next(null);
          this.user = user;
        } else {
          const usersCollection = collection(this.db, 'users');
          const userDoc = doc(usersCollection, user.uid);

          
          docData(userDoc).subscribe(docData => {
            console.log('UserDoc Data Auth Service: ', docData);
            console.log('Is Authenticated: ', this.authenticated);
            this.authenticated = true;
            this.user$.next(docData);
            this.user = docData;
          });
        }
      });

      // Get the auth state, then fetch the Firestore user document or return null
      this.authState$.pipe(
        switchMap(user => {
          console.log('User: ', user);
          // Logged in
          if (user && !user.isAnonymous) {
            console.log('User: ', user);
            return docData(doc(this.db, `users/${user.uid}`));
            // return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
          } else if (user && user.isAnonymous) {
            console.log('User Anonymous: ', user);
            return of(user);
          } else {
            // Logged out
            return of(null);
          }
        })
      );
    }

    async googleSignin() {
      const provider = new GoogleAuthProvider();
      return signInWithPopup(this.afAuth, provider).then(credential => {
        console.log('Google Sign In Successful');
        this.updateUserData(credential.user)
      }).catch(error => {
        console.log(error);
      });
      // return this.updateUserData(credential.user);
    }
  
    private updateUserData(user: any) {
      // Sets user data to firestore on login
      const userRef = doc(this.db, `users/${user.uid}`);
      docData(userRef).pipe(take(1)).subscribe(res => {
        Device.getInfo().then(info => {
          let device;
          device = info;
  
          // If the User is a Returning Visitor
          if (res === undefined) {
            const data = { 
              uid: user.uid, 
              email: user.email, 
              displayName: user.displayName, 
              photoURL: user.photoURL,
              returnedAt: new Date(),
              device,
              roles: {
                visitor: true,
                subscriber: false
              }
            };
    
            return setDoc(userRef, data, { merge: true });
          } else if(res['roles'].visitor) {
            const data = { 
              uid: user.uid, 
              email: user.email, 
              displayName: user.displayName, 
              photoURL: user.photoURL,
              returnedAt: new Date(),
              device,
              roles: {
                visitor: true,
                subscriber: false
              }
            };
    
            return setDoc(userRef, data, { merge: true });
          } else if(res['roles'].subscriber) {
            const data = { 
              uid: user.uid, 
              email: user.email, 
              displayName: user.displayName, 
              photoURL: user.photoURL,
              returnedAt: new Date(),
              device,
              roles: {
                visitor: false,
                subscriber: true
              }
            };
    
            return setDoc(userRef, data, { merge: true });
          } 
        }).catch(err => console.log(err));
      });
    }
  
    async signOut() {
      this.alertCtrl.create({
        header: 'Sign Out',
        message: 'Are you sure?',
        buttons: [
          {
            text: 'Yes',
            handler: () => {
              this.afAuth.signOut().then(() => {
                this.user$.next(null);
                window.location.reload();
              });
            }
          },
          {
            text: 'No',
            role: 'cancel'
          }
        ],
        backdropDismiss: false
      }).then(alertEl => alertEl.present()).catch(err => console.log(err));

    }

}
