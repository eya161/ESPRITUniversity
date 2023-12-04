import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailProjetRoutingModule } from './detail-projet-routing.module';
import { AddDetailprojetComponent } from '../../add-detailprojet/add-detailprojet.component';
import { UpdateDetailprojetComponent } from '../../update-detailprojet/update-detailprojet.component';
import { DeleteDetailprojetComponent } from '../../delete-detailprojet/delete-detailprojet.component';
import { ShowDetailprojetComponent } from '../../show-detailprojet/show-detailprojet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AddDetailprojetComponent,
    UpdateDetailprojetComponent,
    DeleteDetailprojetComponent,
    ShowDetailprojetComponent,
  ],
  imports: [
    CommonModule,
    DetailProjetRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
 
  ],
})
export class DetailProjetModule {}
