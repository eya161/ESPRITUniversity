import { Component, Renderer2, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/manage-user/authentication.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  constructor(private renderer: Renderer2, private authService:AuthenticationService) {}
  userProfile:any;
  ngOnInit(): void {
    this.userProfile = this.authService.getUserProfileFromLocalStorage();
    console.log('User Profile:', this.userProfile);
  }

  ngAfterViewInit() {
    this.setupSidebarToggle();
  }

  private setupSidebarToggle() {
    const sidebarCollapseButton = document.querySelector('#sidebarCollapse');

    if (sidebarCollapseButton) {
      this.renderer.listen(sidebarCollapseButton, 'click', () => {
        const sidebar = document.querySelector('#sidebar');
        if (sidebar) {
          sidebar.classList.toggle('active');
        }
      });
    }
  }
  isShowDivIf = false;

  toggleDisplayDivIf() {
    this.isShowDivIf = !this.isShowDivIf;
  }
}
