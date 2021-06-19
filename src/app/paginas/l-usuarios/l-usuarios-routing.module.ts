import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LUsuariosPage } from './l-usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: LUsuariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LUsuariosPageRoutingModule {}
