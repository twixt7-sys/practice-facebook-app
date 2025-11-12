import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  constructor(private router: Router) {

  }

  loginUser() {
  this.router.navigate(['/home']);
  }
  signupUser() {

  this.router.navigate(['/signup']);
  }
}
