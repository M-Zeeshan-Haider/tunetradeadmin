import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/index';
import { LoginRequest } from 'src/app/shared/models/requestModels/loginRequest.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMassage = '';
  validationErrors = {
    userId: [
      {
        type: 'required',
        message: 'plz enter your email address'
      }
    ],
    userPassword: [
      {
        type: 'required',
        message: 'plz enter your password'
      }
    ]
  };
  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.loginForm = this.fb.group({
      userId : ['', [Validators.required]],
      userPassword : ['', [Validators.required, Validators.minLength(7)]]
    });
  }
  login(formdata) {
    console.log(formdata)
    let loginData: LoginRequest = formdata;
    this.loginService.login(loginData).subscribe(res => {
      console.log(res.message);
      if (res.status === true) {
        sessionStorage.setItem('authToken', res['token']);
        this.router.navigate(['admin']);
      } else {
        this.errorMassage = 'invalid credentials';
      }
    } );
  }

}
