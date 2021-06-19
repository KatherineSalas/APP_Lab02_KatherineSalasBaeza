import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { REgresosPage } from './r-egresos.page';

const routes: Routes = [
  {
    path: '',
    component: REgresosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class REgresosPageRoutingModule {}
