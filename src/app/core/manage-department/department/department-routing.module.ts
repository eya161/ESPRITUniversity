import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDepartmentComponent } from '../list-department/list-department.component';
import { EditDepartmentComponent } from '../edit-department/edit-department.component';
import { AddDepartmentComponent } from '../add-department/add-department.component';

const routes: Routes = [
  {path:'',component:ListDepartmentComponent ,   children: [
    {path:'EditDepartment/:id',component:EditDepartmentComponent},
    {path:'AddDepartment',component:AddDepartmentComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
