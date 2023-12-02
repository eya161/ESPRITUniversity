import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/manage-user/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor(private authService:AuthenticationService, private router:Router) { }

  isShowDivIf = false;
  isDropdownOpen1: boolean = false;
  isDropdownOpen2: boolean = false;
  isDropdownOpen3: boolean = false;
  isDropdownOpen4: boolean = false;

  toggleDisplayDivIf() {
    this.isShowDivIf = !this.isShowDivIf;
  }
  
  ngOnInit(): void {}

  toggleDropdown(dropdownNum: number) {
    if (dropdownNum === 1) {
      this.isDropdownOpen1 = !this.isDropdownOpen1;
    }else{
      this.isDropdownOpen1=false;
    }
    if (dropdownNum === 2) {
      this.isDropdownOpen2 = !this.isDropdownOpen2;
    }else{
      this.isDropdownOpen2=false;
    }
    if (dropdownNum === 3) {
      this.isDropdownOpen3 = !this.isDropdownOpen3;
    }else{
      this.isDropdownOpen3=false;
    }
    if (dropdownNum === 4) {
      this.isDropdownOpen4 = !this.isDropdownOpen4;
    }else{
      this.isDropdownOpen4=false;
    }
  }
  logout(){
    this.authService.logout();
    
  }
  
}