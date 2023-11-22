import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forget-password-interface',
  templateUrl: './forget-password-interface.component.html',
  styleUrls: ['./forget-password-interface.component.css']
})
export class ForgetPasswordInterfaceComponent implements OnInit {
  token: any;
  newPassword: any;

  constructor(private userService: AuthenticationService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.token = params['token'];
      console.log(this.token);
    });
  }

  onSubmit() {
    this.userService.resetPassword(this.token, this.newPassword)
      .subscribe(
        response => {
          console.log('Password reset successful', response);
          this.router.navigate(['/login']);
        },
        error => {
          console.error('Password reset failed', error);
          // Handle error (e.g., display error message)
        }
      );
  }
}