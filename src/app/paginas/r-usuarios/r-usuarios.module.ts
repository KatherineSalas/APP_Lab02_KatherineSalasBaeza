import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RUsuariosPageRoutingModule } from './r-usuarios-routing.module';

import { RUsuariosPage } from './r-usuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RUsuariosPageRoutingModule
  ],
  declarations: [RUsuariosPage]
})
export class RUsuariosPageModule {}
