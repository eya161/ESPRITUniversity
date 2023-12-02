import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private apiUrl = 'http://localhost:8082/';
  isAuthenticated = false; // Add isAuthenticated property
  helper = new JwtHelperService();
  decodedToken: any; 
  constructor(private http: HttpClient, private router:Router) {}

  login(email: string, password: string): Observable<any> {
    const body = { email, password };

    return this.http
      .post<string>(`${this.apiUrl}authenticate`, body, {
        responseType: 'text' as 'json',
      })
      .pipe(
        tap((token) => {
          this.handleAuthentication(token);
          this.decodedToken = this.helper.decodeToken(token); 
          console.log(this.decodedToken);
        }),
        catchError((error) => throwError(error))
      );
  }

  private handleAuthentication(token: string): void {
    if (token) {
      localStorage.setItem('authToken', token);
      this.decodedToken = this.helper.decodeToken(token); 
      console.log('Decoded Token:', this.decodedToken); 
      localStorage.setItem('userProfile', JSON.stringify(this.decodedToken)); 
      this.isAuthenticated = true; 
    } else {
      this.isAuthenticated = false; 
      console.error('Authentication failed');
    }
  }
  getUserProfileFromLocalStorage(): any {
    const userProfile = localStorage.getItem('userProfile');
    return userProfile ? JSON.parse(userProfile) : null;
  }  

  register(nomUser: string, prenomUser: string, cin: number, email: string, username: string, password: string, role: string): Observable<any> {
    const body = { nomUser, prenomUser, cin, email, username, password, role };
  
    return this.http.post<any>(`${this.apiUrl}register`, body, { responseType: 'text' as 'json' })
      .pipe(
        tap(response => console.log(response)
        ),
        catchError(error => throwError(error))
      );
  }  
  pwdResetRequest(email: string): Observable<any> {
    const body = {email};
  
    return this.http.post<any>(`${this.apiUrl}register/password-reset-request`, body, { responseType: 'text' as 'json' })
      .pipe(
        tap(response => console.log(response)
        ),
        catchError(error => throwError(error))
      );
  }  
  resetPassword(token: string, newPassword: string): Observable<any> {
    const body = { newPassword };
  
    return this.http.post<any>(`${this.apiUrl}register/reset-password?token=${token}`, body, { responseType: 'text' as 'json' })
    .pipe(
      tap(response => console.log(response)
      ),
      catchError(error => throwError(error))
    );
  }
  updatePassword(email: string, oldPassword: string, newPassword: string) {
    const body = { email, oldPassword, newPassword };

    return this.http.post<any>(`${this.apiUrl}register/change-password`, body, { responseType: 'text' as 'json' })
      .pipe(
        tap(response => {
          console.log('Password change successful:', response);
        }),
        catchError(error => {
          alert('Password change error:'+error);
          return throwError(error);
        })
      );
  }
  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userProfile');
    this.isAuthenticated = false; 
    this.router.navigate(['/login'])

  }
}
