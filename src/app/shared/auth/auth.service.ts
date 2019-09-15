import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularfirebaseService } from '../helpers/angularfirebase.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import * as firebase from 'firebase/app';
import { UserModel } from '../models/user.model';
import { Observable, of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  redirecting = false;
  user$: Observable<UserModel>;

  constructor(    
    public afAuth: AngularFireAuth,
    private db: AngularfirebaseService,
    private router: Router,
    private snackBar: MatSnackBar
    ) { 
      this.user$ = this.afAuth.authState.pipe(
        switchMap(user => {
          if(user){
            return this.db.doc<UserModel>(`users/${user.uid}`).valueChanges();
          } else{
            return of(null);
          }
        })
      );
      this.afAuth.authState.pipe(take(1)).subscribe(user=> {
        if(user) {
          const userRef: AngularFirestoreDocument<any> = this.db.doc(
            `users/${user.uid}`
          );
          userRef.ref.get().then(value => {
            if(value.exists){
              const data: UserModel = {
                uid: user.uid,
                email: user.email,
                emailVerified: user.emailVerified,
                displayName: user.displayName || user.email || user.phoneNumber,
                phoneNumber: user.phoneNumber,
                photoURL: user.photoURL
              };
              const uid = user.uid;
              const updateUser = { uid, ...value.data()};
              this.updateUserData(updateUser).catch(error => {
                console.log(error);
                router.navigate(['/user/user-signin']);
              });
            } else {
              const data: UserModel = {
                uid: user.uid,
                email: user.email,
                emailVerified: user.emailVerified,
                displayName: user.displayName || user.email || user.phoneNumber,
                phoneNumber: user.phoneNumber,
                photoURL: user.photoURL,
                roles: {
                  buyer: true
                }
            };
            this.setUserData(data).catch(error => {
              console.log(error);
              router.navigate(['/user/user-signin']);
            });
          }
        });
      }
    })
  }
  private afAuthLogin(provider: firebase.auth.AuthProvider) {
    this.afAuth.auth
      .signInWithRedirect(provider)
      .then(value => console.log(value), reason => console.log(reason));
  }

    //// Anonymous Auth ////

    anonymousLogin() {
      return this.afAuth.auth
        .signInAnonymously()
        .then(credential => {
          this.snackBar.open(`Welcome to  Sections`, '', {
            panelClass: 'success'
          });
          return this.updateUserData(credential.user); // if using firestore
        })
        .catch(error => {
          this.handleError(error);
        });
    }
  
    canCreate(user: UserModel): boolean {
      const allowed = ['admin', 'buyer'];
      return this.checkAuthorization(user, allowed);
    }
  
    canDelete(user: UserModel): boolean {
      const allowed = ['admin'];
      return this.checkAuthorization(user, allowed);
    }
  
    canEdit(user: UserModel): boolean {
      const allowed = ['admin', 'buyer'];
      return this.checkAuthorization(user, allowed);
    }


     ///// Role-based Authorization //////

  canRead(user: UserModel): boolean {
    const allowed = ['admin', 'buyer'];
    return this.checkAuthorization(user, allowed);
  }

  // determines if user has matching role
  private checkAuthorization(user: UserModel, allowedRoles: string[]): boolean {
    if (!user) {
      return false;
    }
    for (const role of allowedRoles) {
      if (user.roles[role]) {
        return true;
      }
    }
    return false;
  }

  emailLogin(email: string, password: string) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(credential => {
        this.snackBar.open(`Welcome back`, '', { panelClass: 'success' });
        return this.updateUserData(credential.user);
      })
      .catch(error => this.handleError(error));
  }

  //// Email/Password Auth ////

  emailSignUp(email: string, password: string) {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(credential => {
        this.snackBar.open(`Welcome to Sections`, '', {
          panelClass: 'success'
        });
        return this.updateUserData(credential.user); // if using firestore
      })
      .catch(error => this.handleError(error));
  }

  // If error, console log and notify user
  private handleError(error: Error) {
    console.error(error);
    this.snackBar.open(error.message, 'Close', {
      duration: null,
      panelClass: 'error'
    });
  }
  linkFacebook() {
    return this.afAuth.auth.currentUser.linkWithRedirect(
      new firebase.auth.FacebookAuthProvider()
    );
  }
  linkGithub() {
    return this.afAuth.auth.currentUser.linkWithRedirect(
      new firebase.auth.GithubAuthProvider()
    );
  }
  linkGoogle() {
    return this.afAuth.auth.currentUser.linkWithRedirect(
      new firebase.auth.GoogleAuthProvider()
    );
  }
  linkTwitter() {
    return this.afAuth.auth.currentUser.linkWithRedirect(
      new firebase.auth.TwitterAuthProvider()
    );
  }

  // Sends email allowing user to reset password
  resetPassword(email: string) {
    const fbAuth = firebase.auth();

    return fbAuth
      .sendPasswordResetEmail(email)
      .then(() =>
        this.snackBar.open('Password update email sent', '', {
          panelClass: 'info'
        })
      )
      .catch(error => this.handleError(error));
  }
  public setUserData(user: UserModel) {
    return this.db.set(`users/${user.uid}`, user);
  }

  // signin(provider: string) {
  //   switch (provider) {
  //     case AuthType.google: {
  //       return this.afAuthLogin(new firebase.auth.GoogleAuthProvider());
  //     }
  //     case AuthType.facebook: {
  //       return this.afAuthLogin(new firebase.auth.FacebookAuthProvider());
  //     }
  //     case AuthType.twitter: {
  //       return this.afAuthLogin(new firebase.auth.TwitterAuthProvider());
  //     }
  //     case AuthType.github: {
  //       return this.afAuthLogin(new firebase.auth.GithubAuthProvider());
  //     }
  //   }
  // }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }
  unlinkFacebook() {
    return this.afAuth.auth.currentUser.unlink('facebook.com');
  }
  unlinkGithub() {
    return this.afAuth.auth.currentUser.unlink('github.com');
  }
  unlinkGoogle() {
    return this.afAuth.auth.currentUser.unlink('google.com');
  }
  unlinkTwitter() {
    return this.afAuth.auth.currentUser.unlink('twitter.com');
  }

  // Sets user data to firestore after succesful signin
  private updateUserData(user: UserModel) {
    return this.db.update(`users/${user.uid}`, user);
  }
}
