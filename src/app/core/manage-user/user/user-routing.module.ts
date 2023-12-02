import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from '../list-users/list-users.component';
import { AddUserComponent } from '../add-user/add-user.component';
import { DetailsUserComponent } from '../details-user/details-user.component';

const routes: Routes = [
  {path:"show",children:[
    {path:"",component:ListUsersComponent},
    {path:"addfoyer",component:AddUserComponent},
    {path:"details/:id",component:DetailsUserComponent},
 ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
