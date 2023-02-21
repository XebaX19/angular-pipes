import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Susana';
  genero: string = 'femenino';
  invitacionMap = {
    masculino: 'invitarlo',
    femenino: 'invitarla'
  };

  cambiarPersona() {
    this.nombre = 'Sebastian';
    this.genero = 'masculino';
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Juan', 'Pepe', 'Seba', 'Pedro'];
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    'other': `tenemos # clientes esperando.`,
  };

  borrarCliente() {
    this.clientes.shift();
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Sebastián',
    edad: 34,
    direccion: 'Villa Constitución, Santa Fe, Argentina'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ];

  //Async Pipe
  miObservable = interval(2000);
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de la promesa');
    }, 3500);
  });
}
