import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { UserService } from '../user.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UpdateUserComponent } from '../update-user/update-user.component';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userProfile: any;
  user: any;
  Showupdate = false;
  ShowupdatepWD = false;
  usertoup: any;
  datebirth:any;

  constructor(
    private authService: AuthenticationService,
    private userservice: UserService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.userProfile = this.authService.getUserProfileFromLocalStorage();
    console.log('User Profile:', this.userProfile);
    this.userservice.getUserById(this.userProfile.id).subscribe((result) => {
      this.user = result;
      this.datebirth=formatDate(this.user.dateNaissance,
      'yyyy-MM-dd',
      'en-US');
    });
  }

  showForm(userup: any) {
    this.usertoup = userup;
    this.Showupdate = true;
    this.ShowupdatepWD = false;
  }
  showFormPwd(userup: any) {
    this.usertoup = userup;
    this.Showupdate = false;
    this.ShowupdatepWD = true;
  }

  afterrecieveData(event: any) {
    console.log('Received data:', event); // Check if 'bonjour' is logged when the event is received
    this.Showupdate = false; // Close the update section
  }  
  afterrecieveDataPwd(e: any) {
    this.ShowupdatepWD = false;
  }
}
