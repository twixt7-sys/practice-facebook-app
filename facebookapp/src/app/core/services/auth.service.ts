import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost/ads-edp/';

  constructor(private http: HttpClient) {}

  signup(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}signup.php`, data);
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}login.php`, data);
  }

  home(): Observable<any> {
    return this.http.get(`${this.baseUrl}home.php`);
  }
}
