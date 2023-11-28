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
import { AddProjetComponent } from './core/manageProjet/add-projet/add-projet.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddUniversiteComponent,
    AddFoyerComponent,
    UpdateFoyerComponent,
    DeleteFoyerComponent,
    ListFoyerComponent,
    AddProjetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
