import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RUsuariosPage } from './r-usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: RUsuariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RUsuariosPageRoutingModule {}
