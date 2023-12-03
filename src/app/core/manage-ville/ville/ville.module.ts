import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VilleRoutingModule } from './ville-routing.module';
import { AddVilleComponent } from '../add-ville/add-ville.component';
import { DeleteVilleComponent } from '../delete-ville/delete-ville.component';
import { ShowVilleleComponent } from '../show-villele/show-villele.component';
import { UpdateVilleComponent } from '../update-ville/update-ville.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [  
    AddVilleComponent,
    DeleteVilleComponent,
    ShowVilleleComponent,
    UpdateVilleComponent,],
  imports: [
    CommonModule,
    VilleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class VilleModule { }
