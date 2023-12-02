import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password-interface',
  templateUrl: './forget-password-interface.component.html',
  styleUrls: ['./forget-password-interface.component.css']
})
export class ForgetPasswordInterfaceComponent implements OnInit {
  token: any;
  newPassword: any;
  confirmPassword: any;

  constructor(private userService: AuthenticationService, private route: ActivatedRoute, private router:Router, private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.token = params['token'];
      console.log(this.token);
    });
  }
  // fb = this.formbuilder.group({
  //   nyour_newPassword: ['', [Validators.required], Validators.pattern('^[a-zA-Z0-9]{8,}?')],
  //   your_confirmPassword: ['', [Validators.required], Validators.pattern('^[a-zA-Z0-9]{8,}?')]
  // }, {
  //   validator: this.passwordMatchValidator
  // });
  // passwordMatchValidator(g: FormGroup) {
  //   return g.get('your_newPassword')?.value === g.get('your_confirmPassword')?.value ? null : { mismatch: true };
  // }

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