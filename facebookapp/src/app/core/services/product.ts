import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  
  private baseUrl = 'http://localhost/ads-edp/';

  constructor(private http: HttpClient) {}

  getCategories(data: any): Observable<any> {
    return this.http.get(`${this.baseUrl}product.php`, data);
  }

  createProduct(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}createProduct.php`, data);
  }
}
