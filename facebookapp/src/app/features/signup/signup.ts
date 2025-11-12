import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {
  constructor(private router: Router) {

  }
  registerUser() {
    this.router.navigate(['/home'])
  }
  backToLogin() {
    this.router.navigate(['/login'])
  }
}
