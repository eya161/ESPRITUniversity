import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversiteRoutingModule } from './universite-routing.module';
import { AddUniversiteComponent } from '../add-universite/add-universite.component';
import { UpdateUniversiteComponent } from '../update-universite/update-universite.component';
import { DeleteUniversiteComponent } from '../delete-universite/delete-universite.component';
import { ShowUniversiteComponent } from '../show-universite/show-universite.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AddUniversiteComponent,
    UpdateUniversiteComponent,
    DeleteUniversiteComponent,
    ShowUniversiteComponent
  ],
  imports: [
    CommonModule,
    UniversiteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ]
})
export class UniversiteModule { }
