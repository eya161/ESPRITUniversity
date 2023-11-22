import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-forget-password-email-interface',
  templateUrl: './forget-password-email-interface.component.html',
  styleUrls: ['./forget-password-email-interface.component.css']
})
export class ForgetPasswordEmailInterfaceComponent {
  email: string= '';
  constructor(private userservice:AuthenticationService){

  }
  onSubmit() {
    this.userservice.pwdResetRequest(this.email)
      .subscribe(
        response => {
          console.log("ok",response);
          
        },
        error => {
          // Handle registration error
          console.log("error",error);
          
        }
      );
  }  

}
