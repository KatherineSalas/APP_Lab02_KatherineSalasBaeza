import { Component, OnInit } from '@angular/core';

interface Componente{
  icono: string;
  nombre: string;
  direccion: string;

}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

componente: Componente[] = [
  {
    icono: 'ellipsis-vertical-outline',
    nombre: "Registrar Usuarios",
    direccion:'/r-usuarios'

  }

];

  constructor() { }

  ngOnInit() {
  }

}
