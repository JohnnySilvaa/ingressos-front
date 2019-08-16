import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../shared/auth/auth.service';
import { ErrorService } from '../../shared/errors/error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  matcher = new ErrorService();
  isLoadingResults = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.required],
      password : [null, Validators.required]
    });
  } 

  onFormSubmit(form: NgForm) {
    this.authService.login(form)
      .subscribe(res => {
        console.log(res);
        if (res.token) {
          localStorage.setItem('token', res.token);
          this.router.navigate(['ticket']);
        }
      }, (err) => {
        console.log(err);
      });
  }


}
