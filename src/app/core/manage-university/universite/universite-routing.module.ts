import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowUniversiteComponent } from '../show-universite/show-universite.component';
import { AddUniversiteComponent } from '../add-universite/add-universite.component';
import { UpdateUniversiteComponent } from '../update-universite/update-universite.component';
import { DeleteUniversiteComponent } from '../delete-universite/delete-universite.component';

const routes: Routes = [
  {path:"show",children:[
    {path:"",component:ShowUniversiteComponent},
    {path:"adduni",component:AddUniversiteComponent},
    {path:"update/:id",component:UpdateUniversiteComponent},
    {path:"delete",component:DeleteUniversiteComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversiteRoutingModule { }
