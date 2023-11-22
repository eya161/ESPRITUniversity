import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private apiUrl = 'http://localhost:8082/';
  isAuthenticated = false; // Add isAuthenticated property
  helper = new JwtHelperService();
  decodedToken: any; 
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const body = { email, password };

    return this.http
      .post<string>(`${this.apiUrl}authenticate`, body, {
        responseType: 'text' as 'json',
      })
      .pipe(
        tap((token) => {
          this.handleAuthentication(token);
          this.decodedToken = this.helper.decodeToken(token); // Decode the received token
          console.log(this.decodedToken);
        }),
        catchError((error) => throwError(error))
      );
  }

  private handleAuthentication(token: string): void {
    if (token) {
      // Save the token in session storage
      sessionStorage.setItem('authToken', token);
      this.isAuthenticated = true; // Update isAuthenticated upon successful login

      // Other handling logic if needed
    } else {
      this.isAuthenticated = false; // Set isAuthenticated to false on authentication failure
      // Handle authentication failure, e.g., display an error message
      console.error('Authentication failed');
    }
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
  logout(): void {
    // Remove the authentication token from session storage
    sessionStorage.removeItem('authToken');
    this.isAuthenticated = false; // Update isAuthenticated on logout
  }
}
