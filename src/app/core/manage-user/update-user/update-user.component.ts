import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../user.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent {
  @Input() p: any;
  @Output() sendmsg = new EventEmitter<any>();

  constructor(private userservice: UserService) {}

  saveChanges(): void {
    if (this.p && this.p.dateNaissance) {
      this.p.dateNaissance = formatDate(
        this.p.dateNaissance,
        'yyyy-MM-dd',
        'en-US'
      );

      this.userservice.updateUserWithoutPwd(this.p).subscribe(
        (response) => {
          console.log('User updated:', response);
          // Optionally, handle success or show a success message
        },
        (error) => {
          console.error('Error updating user:', error);
          // Handle error or show an error message
        }
      );
    }
  }
  sendDataToParent() {
    this.sendmsg.emit('bonjour'); // Emitting data when called
  }
}
