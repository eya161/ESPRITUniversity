import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlocsRoutingModule } from './blocs-routing.module';
import { AddBlocComponent } from '../../add-bloc/add-bloc.component';

import { UpdateBlocComponent } from '../../update-bloc/update-bloc.component';
import { ListBlocComponent } from '../../list-bloc/list-bloc.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DeleteBlocComponent } from '../../delete-bloc/delete-bloc.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AddBlocComponent,
    DeleteBlocComponent,
    UpdateBlocComponent,
    ListBlocComponent
  ],
  imports: [
    CommonModule,
    BlocsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ]
})
export class BlocsModule { }
