import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { REgresosPageRoutingModule } from './r-egresos-routing.module';

import { REgresosPage } from './r-egresos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    REgresosPageRoutingModule
  ],
  declarations: [REgresosPage]
})
export class REgresosPageModule {}
