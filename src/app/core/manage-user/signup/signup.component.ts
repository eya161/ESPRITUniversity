import { Component } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from '../user.service';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  nomUser: string = '';
  prenomUser: string = '';
  cin: any ;
  email: string = '';
  username: string = '';
  password: string = '';
  role: string = 'ETUDIANT';
  constructor(private userservice:AuthenticationService, private router:Router, private formbuilder:FormBuilder){

  }
  fb = this.formbuilder.group({
    nomUserfb: ['', [Validators.required, Validators.minLength(4)]],
    prenomUserfb: ['', [Validators.required, Validators.minLength(3)]],
    cinfb: ['', [Validators.required, Validators.pattern("^[0-9]{8}$")]],
    emailfb: [
      '',
      [
        Validators.required,
        Validators.pattern(
          '^[a-zA-Z0-9._-]+@(esprit\\.tn|gmail\\.com)$'
        )
      ]
    ],    
    usernamefb: ['', [Validators.required, Validators.minLength(3)]],
    passwordfb: [
      '',
      [Validators.required, Validators.pattern('^[a-zA-Z0-9]{8,}?')]
    ]
  });
  onSubmit() {
    this.userservice.register(this.nomUser, this.prenomUser, this.cin, this.email, this.username, this.password, "ETUDIANT")
      .subscribe(
        response => {
          // Handle the response as needed (e.g., navigate to a different page)
          alert('Registration successful' + response);
          // Assuming the navigation logic is correct, use this line to navigate to the login page
          this.router.navigate(['/login']);
        },
        error => {
          // Handle registration error
          alert('Registration failed' + error);
        }
      );
  }  

}
