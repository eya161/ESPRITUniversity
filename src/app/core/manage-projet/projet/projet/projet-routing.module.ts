import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowProjetComponent } from '../../show-projet/show-projet.component';
import { AddProjetComponent } from '../../add-projet/add-projet.component';
import { UpdateProjetComponent } from '../../update-projet/update-projet.component';
import { DeleteProjetComponent } from '../../delete-projet/delete-projet.component';

const routes: Routes = [
  {
    path: 'show',
    children: [
      { path: '', component: ShowProjetComponent },
      { path: 'addprojet', component: AddProjetComponent },
      { path: 'update/:id', component: UpdateProjetComponent },
      { path: 'delete', component: DeleteProjetComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetRoutingModule { }
