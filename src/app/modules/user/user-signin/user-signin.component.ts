import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.scss']
})
export class UserSigninComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {

    const uiConfig = {
      signInSucessUrl: '/welcome',
      signInOptions: [

        // provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // authMethod: 'https://accounts.google.com',
        // clientId: ''
      ]
    }
  }

}
