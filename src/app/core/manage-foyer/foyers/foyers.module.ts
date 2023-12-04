import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoyersRoutingModule } from './foyers-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddFoyerComponent } from '../add-foyer/add-foyer.component';
import { UpdateFoyerComponent } from '../update-foyer/update-foyer.component';
import { DeleteFoyerComponent } from '../delete-foyer/delete-foyer.component';
import { ListFoyerComponent } from '../list-foyer/list-foyer.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AddFoyerComponent,
    UpdateFoyerComponent,
    DeleteFoyerComponent,
    ListFoyerComponent
  ],
  imports: [
    CommonModule,
    FoyersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ]
})
export class FoyersModule { }
