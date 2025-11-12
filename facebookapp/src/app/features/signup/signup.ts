import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {
  @Input() username: string = "";
  @Input() password: string = "";
  message: string = "";
  constructor(private auth: AuthService, private router: Router) {

  }
    registerUser() {
    this.auth.signup({
      username: this.username,
      password: this.password
    }).subscribe({
      next: (res) => {
        this.message = res.message;
        if (res.status === 'success') {
          localStorage.setItem('userId', res.id);
          this.router.navigate(['/home']);
        } else {
          this.message = 'Signup failed';
        }
      },
      error: (err) => {
        this.message = 'Error: ' + err.message;
      }
    });
  }
  backToLogin() {
    this.router.navigate(['/login'])
  }
}
