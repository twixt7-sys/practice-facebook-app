import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})

export class Login {
  @Input() username: string = "";
  @Input() password: string = "";
  message: string = "";

  constructor(private auth: AuthService, private router: Router) {

  }

  loginUser() {
    this.auth.login({
      username: this.username,
      password: this.password
    }).subscribe({
      next: (res) => {
        console.log(res)
        this.message = res.message;
        if (res.status === 'success') {
          console.log(res.status)
          localStorage.setItem('userId', res.id);
          this.router.navigate(['/home']);
        } else {
          this.message = 'failed'
        }
      },
      error: (err) => this.message = 'Error: ' + err.message
    });
  }

  signupUser() {
    this.router.navigate(['/signup']);
  }
}
