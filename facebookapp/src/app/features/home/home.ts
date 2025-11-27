import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  constructor(private router: Router) {

  }
  addProductPage(){
    this.router.navigate(['/addProduct']);
  }
  logoutUser() {
    localStorage.removeItem('userId');
    this.router.navigate(['/login']);
  }
}
