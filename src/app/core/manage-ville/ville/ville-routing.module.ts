import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowVilleleComponent } from '../show-villele/show-villele.component';
import { AddVilleComponent } from '../add-ville/add-ville.component';
import { UpdateVilleComponent } from '../update-ville/update-ville.component';
import { DeleteVilleComponent } from '../delete-ville/delete-ville.component';

const routes: Routes = [
  {path:"show",children:[
    {path:"",component:ShowVilleleComponent},
    {path:"addville",component:AddVilleComponent},
    {path:"update/:id",component:UpdateVilleComponent},
    {path:"delete",component:DeleteVilleComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VilleRoutingModule { }
