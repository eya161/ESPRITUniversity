import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFoyerComponent } from '../list-foyer/list-foyer.component';
import { AddFoyerComponent } from '../add-foyer/add-foyer.component';
import { UpdateFoyerComponent } from '../update-foyer/update-foyer.component';
import { DeleteFoyerComponent } from '../delete-foyer/delete-foyer.component';

const routes: Routes = [
  {path:"show",children:[
    {path:"",component:ListFoyerComponent},
    {path:"addfoyer",component:AddFoyerComponent},
    {path:"updateFoyer/:id",component:UpdateFoyerComponent},
    {path:"deleteFoyer",component:DeleteFoyerComponent}
 ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoyersRoutingModule { }
