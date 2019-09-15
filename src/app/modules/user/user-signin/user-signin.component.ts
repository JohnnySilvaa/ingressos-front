import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router';
import * as firebaseui from 'firebaseui';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.scss']
})
export class UserSigninComponent implements OnInit {

  ui: firebaseui.auth.AuthUI

  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
    const uiConfig = {
      signInSuccessUrl: '/sections',
      signinOptions: [
        {
          provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID, 
          authMethod: 'https://accounts.google.com',
          clientId:  'your-CLIENT_ID-.apps.googleusercontent.com'
        },
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID
      ],

      //create in termly, for exaple
      tosUrl: 'your-POLICE_URL',

      privacyPolicyUrl: function(){
        window.location.assign(
          'your_POLICE_URL'
        );
      }
    };

    this.ui = new firebaseui.auth.AuthUI(this.afAuth.auth);
    this.ui.start('#firebaseui-auth-container', uiConfig);
  }
}
