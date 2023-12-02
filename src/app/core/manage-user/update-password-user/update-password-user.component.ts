import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../user.service';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-password-user',
  templateUrl: './update-password-user.component.html',
  styleUrls: ['./update-password-user.component.css']
})
export class UpdatePasswordUserComponent {
  @Input() u: any;
  @Output() sendmsg = new EventEmitter();
  oldPassword:any;
  newPassword:any;

  constructor(private userservice: AuthenticationService, private router:Router) {}

  saveChanges(): void {    
    this.userservice.updatePassword(this.u.email,this.oldPassword,this.newPassword).subscribe(
      (response) => {
        console.log('User updated:', response);
        this.userservice.logout();
        // Optionally, handle success or show a success message
      },
      (error) => {
        alert('Error updating user:'+ error);
        // Handle error or show an error message
      }
    );
  }

  sendDataToParent() {
    this.sendmsg.emit('bonjour');
  }
}
