import { Component } from '@angular/core';
import { AuthenticationService } from './core/manage-user/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EspritUniversity';
  constructor(private authService: AuthenticationService) {}

  get isAuthenticated(): boolean {
    return this.authService.isAuthenticated;
  }
}
