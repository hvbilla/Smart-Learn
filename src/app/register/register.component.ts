import {Component, OnInit, Input } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder) { }
  public firstName: '';
  public lastName: '';
  public emailId: '';
  public password: '';
  registerForm: FormGroup;
  submitted = false;
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    let userDetails = {
      'firstName': this.registerForm.value.firstName,
      'lastName': this.registerForm.value.lastName,
      'emailId': this.registerForm.value.email,
      'password': this.registerForm.value.password
    };
    if(window.localStorage) {
      localStorage.setItem(userDetails.emailId, JSON.stringify(userDetails));
      Swal.fire({
        type: 'success',
        title: 'Registered Successfully',
        timer: 2000
      });
    }
    this.router.navigate(['/login']);  }
}
