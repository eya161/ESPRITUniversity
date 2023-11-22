import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AddUniversiteComponent } from './core/manage-university/add-universite/add-universite.component';
import { AddFoyerComponent } from './core/manage-foyer/add-foyer/add-foyer.component';
import { UpdateFoyerComponent } from './core/manage-foyer/update-foyer/update-foyer.component';
import { DeleteFoyerComponent } from './core/manage-foyer/delete-foyer/delete-foyer.component';
import { ListFoyerComponent } from './core/manage-foyer/list-foyer/list-foyer.component';
import { LoginComponent } from './core/manage-user/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './core/manage-user/signup/signup.component';
import { ForgetPasswordEmailInterfaceComponent } from './core/manage-user/forget-password-email-interface/forget-password-email-interface.component';
import { ForgetPasswordInterfaceComponent } from './core/manage-user/forget-password-interface/forget-password-interface.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddUniversiteComponent,
    AddFoyerComponent,
    UpdateFoyerComponent,
    DeleteFoyerComponent,
    ListFoyerComponent,
    LoginComponent,
    SignupComponent,
    ForgetPasswordEmailInterfaceComponent,
    ForgetPasswordInterfaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
