import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: any;
  password: any;

  constructor(private authService: AuthenticationService, private router:Router) {}

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        console.log('Login successful', response);
        this.router.navigate(['/profile']);
        // Handle the response as needed (e.g., navigate to a different page)
      },
      (error) => {
        console.error('Login failed', error);
        // Handle login error
      }
    );
  }
}
