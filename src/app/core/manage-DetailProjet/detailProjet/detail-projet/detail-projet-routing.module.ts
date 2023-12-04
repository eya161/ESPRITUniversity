import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowDetailprojetComponent } from '../../show-detailprojet/show-detailprojet.component';
import { AddDetailprojetComponent } from '../../add-detailprojet/add-detailprojet.component';
import { UpdateDetailprojetComponent } from '../../update-detailprojet/update-detailprojet.component';
import { DeleteDetailprojetComponent } from '../../delete-detailprojet/delete-detailprojet.component';

const routes: Routes = [
  {
    path: 'show',
    children: [
      { path: '', component: ShowDetailprojetComponent },
      { path: 'add', component: AddDetailprojetComponent },
      { path: 'update/:id', component: UpdateDetailprojetComponent},
      { path: 'delete', component: DeleteDetailprojetComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailProjetRoutingModule { }
