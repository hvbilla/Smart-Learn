import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import {ViewEncapsulation} from '@angular/core';
import { AppComponent } from '../app.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class LoginComponent implements OnInit {

  public emailId: '';
  public password;
  constructor( private router: Router, private formBuilder: FormBuilder, private appComponent: AppComponent) { }

  loginForm: FormGroup;
  submitted = false;
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  get f() { return this.loginForm.controls; }
  login() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    console.log(localStorage.length);
    let user = localStorage.getItem(this.loginForm.value.email);
    user = JSON.parse(user);
    // @ts-ignore
    if (user != null && user.password === this.loginForm.value.password && user.emailId === this.loginForm.value.email){
      this.appComponent.logoutFlag = true;
      this.router.navigate(['/', '']);
    } else {
      Swal.fire({
        type: 'error',
        title: 'Error in login.Please Check your details',
        timer: 2000
      });
    }
  }
}
