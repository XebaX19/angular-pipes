import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  nombre: string = 'sebastián';
  valor: number = 1000;
  objeto: object = {
    clave: 'valor'
  }

  mostrarNombre() {
    console.log(this.nombre);
  }

  constructor(private primeNgConfig: PrimeNGConfig){}

  ngOnInit() {
    this.primeNgConfig.ripple = true;
  }
}
