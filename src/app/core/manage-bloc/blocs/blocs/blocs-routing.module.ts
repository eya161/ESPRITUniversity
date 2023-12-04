import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBlocComponent } from '../../list-bloc/list-bloc.component';
import { AddBlocComponent } from '../../add-bloc/add-bloc.component';
import { UpdateBlocComponent } from '../../update-bloc/update-bloc.component';
import { DeleteBlocComponent } from '../../delete-bloc/delete-bloc.component';

const routes: Routes = [
  {path:"show",children:[
    {path:"",component:ListBlocComponent},
    {path:"addBloc",component:AddBlocComponent},
    {path:"updateBloc/:id",component:UpdateBlocComponent},
    {path:"deleteBloc",component:DeleteBlocComponent}
 ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlocsRoutingModule { }
