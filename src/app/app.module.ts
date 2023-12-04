import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AddUniversiteComponent } from './core/manage-university/add-universite/add-universite.component';
import { AddFoyerComponent } from './core/manage-foyer/add-foyer/add-foyer.component';
import { UpdateFoyerComponent } from './core/manage-foyer/update-foyer/update-foyer.component';
import { DeleteFoyerComponent } from './core/manage-foyer/delete-foyer/delete-foyer.component';
import { ListFoyerComponent } from './core/manage-foyer/list-foyer/list-foyer.component';
import { LoginComponent } from './core/manage-user/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './core/manage-user/signup/signup.component';
import { ForgetPasswordEmailInterfaceComponent } from './core/manage-user/forget-password-email-interface/forget-password-email-interface.component';
import { ForgetPasswordInterfaceComponent } from './core/manage-user/forget-password-interface/forget-password-interface.component';
import { ErrorComponent } from './shared/error/error.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ProfileComponent } from './core/manage-user/profile/profile.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateUserComponent } from './core/manage-user/update-user/update-user.component';
import { UpdatePasswordUserComponent } from './core/manage-user/update-password-user/update-password-user.component';
import { UserModule } from './core/manage-user/user/user.module';
import { AddDepartmentComponent } from './core/manage-department/add-department/add-department.component';
import { EditDepartmentComponent } from './core/manage-department/edit-department/edit-department.component';
import { ListDepartmentComponent } from './core/manage-department/list-department/list-department.component';
import { StatDepartmentComponent } from './core/manage-department/stat-department/stat-department.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddClasseComponent } from './core/manage-classe/add-classe/add-classe.component';
import { EditClasseComponent } from './core/manage-classe/edit-classe/edit-classe.component';
import { ListClasseComponent } from './core/manage-classe/list-classe/list-classe.component';
import { DetailsClasseComponent } from './core/manage-classe/details-classe/details-classe.component';
import { DeleteUniversiteComponent } from './core/manage-university/delete-universite/delete-universite.component';
import { ShowUniversiteComponent } from './core/manage-university/show-universite/show-universite.component';
import { UpdateUniversiteComponent } from './core/manage-university/update-universite/update-universite.component';
import { AddVilleComponent } from './core/manage-ville/add-ville/add-ville.component';
import { DeleteVilleComponent } from './core/manage-ville/delete-ville/delete-ville.component';
import { ShowVilleleComponent } from './core/manage-ville/show-villele/show-villele.component';
import { UpdateVilleComponent } from './core/manage-ville/update-ville/update-ville.component';
import { GlobaleFilterComponent } from './core/globale-filter/globale-filter.component';
import { UniversiteModule } from './core/manage-university/universite/universite.module';
import { ProjetModule } from './core/manage-projet/projet/projet/projet.module';
import { DetailProjetModule } from './core/manage-DetailProjet/detailProjet/detail-projet/detail-projet.module';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddFoyerComponent,
    UpdateFoyerComponent,
    DeleteFoyerComponent,
    ListFoyerComponent,
    LoginComponent,
    SignupComponent,
    ForgetPasswordEmailInterfaceComponent,
    ForgetPasswordInterfaceComponent,
    ErrorComponent,
    NotFoundComponent,
    ProfileComponent,
    LayoutComponent,
    SidebarComponent,
    UpdateUserComponent,
    UpdatePasswordUserComponent,
    AddDepartmentComponent,
    EditDepartmentComponent,
    ListDepartmentComponent,
    StatDepartmentComponent,
    AddClasseComponent,
    EditClasseComponent,
    ListClasseComponent,
    DetailsClasseComponent,
    GlobaleFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgxPaginationModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    UserModule,
    UniversiteModule,
    NgxPaginationModule,
    ProjetModule,
    DetailProjetModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
