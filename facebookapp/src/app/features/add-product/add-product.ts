import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../core/services/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.scss',
})
export class AddProduct {
  name = '';
  category = '';
  price = 0;
  description = '';
  message = '';

  constructor(
    private prod: ProductService,
    private router: Router
  ){}

  backToHome(){
    this.router.navigate(['/home']);
  }

  submitProduct() {
    const payload = {
      name: this.name,
      category: this.category,
      price: this.price,
      description: this.description
    };

    this.prod.createProduct(payload).subscribe({
      next: res => {
        this.message = 'Product Created';
      },
      error: err => {
        this.message = 'Error: ' + err.message;
      }
    });
  }
}
