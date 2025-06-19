// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', 
})
export class AuthService {
  private API_BASE_URL = 'http://localhost:5000/api/auth'; 

  constructor(private http: HttpClient) {}

  
  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.API_BASE_URL}/register`, userData);
  }

  
  loginUser(credentials: any): Observable<any> {
    return this.http.post(`${this.API_BASE_URL}/login`, credentials);
  }
}