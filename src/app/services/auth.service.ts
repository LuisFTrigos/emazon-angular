import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post('http://localhost:9090/api/category', credentials).pipe(
      tap((response: any) => {
        localStorage.setItem('authToken', response.token);
      })
    );
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }
}
