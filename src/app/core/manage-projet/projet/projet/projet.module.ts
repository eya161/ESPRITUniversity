import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetRoutingModule } from './projet-routing.module';
import { AddProjetComponent } from '../../add-projet/add-projet.component';
import { UpdateProjetComponent } from '../../update-projet/update-projet.component';
import { DeleteProjetComponent } from '../../delete-projet/delete-projet.component';
import { ShowProjetComponent } from '../../show-projet/show-projet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AddProjetComponent,
    UpdateProjetComponent,
    DeleteProjetComponent,
    ShowProjetComponent,
  ],
  imports: [
    CommonModule,
    ProjetRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    NgxPaginationModule,

  ],
})
export class ProjetModule {}
