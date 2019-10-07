import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    logoutFlag = false;
  constructor(private router: Router) { }
  title = 'NutritionCheck';
  logout() {
    Swal.fire({
      type: 'success',
      title: 'Logged out successfully',
      timer: 2000
    });
    this.logoutFlag = false;
    this.router.navigate(['']);
  }
}
