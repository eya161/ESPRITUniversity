import { Component } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from '../user.service';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

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
  constructor(private userservice:AuthenticationService, private router:Router){

  }
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
