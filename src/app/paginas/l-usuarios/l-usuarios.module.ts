import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LUsuariosPageRoutingModule } from './l-usuarios-routing.module';

import { LUsuariosPage } from './l-usuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LUsuariosPageRoutingModule
  ],
  declarations: [LUsuariosPage]
})
export class LUsuariosPageModule {}
