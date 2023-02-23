import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://api.example.com/';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'login', { username, password }).pipe(
      tap((response) => {
        localStorage.setItem('auth_token', response.token);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('auth_token');
  }

  isAuthenticated(): boolean {
    const authToken = localStorage.getItem('auth_token');
    return !!authToken;
  }

  getAuthToken(): string | null {
    return localStorage.getItem('auth_token');
  }
}

