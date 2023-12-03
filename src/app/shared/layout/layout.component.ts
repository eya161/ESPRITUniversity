import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  showNavbar: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.routerState.snapshot.root;
        const path = currentRoute.firstChild?.routeConfig?.path!;
        
        // Hide navbar for specific paths
        this.showNavbar = !['login', 'signup', 'forgetPasswordEmail', 'register/reset-password'].includes(path);
      }
    });
  }

}
