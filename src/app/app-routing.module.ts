import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/manage-user/login/login.component';
import { SignupComponent } from './core/manage-user/signup/signup.component';
import { ForgetPasswordEmailInterfaceComponent } from './core/manage-user/forget-password-email-interface/forget-password-email-interface.component';
import { ForgetPasswordInterfaceComponent } from './core/manage-user/forget-password-interface/forget-password-interface.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ProfileComponent } from './core/manage-user/profile/profile.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

const routes: Routes = [
  {
    path:'',redirectTo:'login',pathMatch:'full'
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'forgetPasswordEmail',component:ForgetPasswordEmailInterfaceComponent
  },
  {
    path:'register/reset-password',component:ForgetPasswordInterfaceComponent
  },
  {
    path:'profile',component:ProfileComponent
  },
  { 
    path: 'user', loadChildren: () => import('../app/core/manage-user/user/user.module').then((m) => m.UserModule) 
  },
  {
      path:'**',component:NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
