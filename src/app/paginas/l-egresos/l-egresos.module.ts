import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LEgresosPageRoutingModule } from './l-egresos-routing.module';

import { LEgresosPage } from './l-egresos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LEgresosPageRoutingModule
  ],
  declarations: [LEgresosPage]
})
export class LEgresosPageModule {}
