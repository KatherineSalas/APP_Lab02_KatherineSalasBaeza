import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'r-usuarios',
    loadChildren: () => import('./paginas/r-usuarios/r-usuarios.module').then( m => m.RUsuariosPageModule)
  },
  {
    path: 'r-egresos',
    loadChildren: () => import('./paginas/r-egresos/r-egresos.module').then( m => m.REgresosPageModule)
  },
  {
    path: 'l-usuarios',
    loadChildren: () => import('./paginas/l-usuarios/l-usuarios.module').then( m => m.LUsuariosPageModule)
  },
  {
    path: 'l-egresos',
    loadChildren: () => import('./paginas/l-egresos/l-egresos.module').then( m => m.LEgresosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
