import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClasseComponent } from '../list-classe/list-classe.component';
import { EditClasseComponent } from '../edit-classe/edit-classe.component';
import { AddClasseComponent } from '../add-classe/add-classe.component';

const routes: Routes = [

  {path:'',component:ListClasseComponent , children:[
    {path:'EditClasse/:id',component:EditClasseComponent},
    {path:'AddClasse',component:AddClasseComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClasseRoutingModule { }
