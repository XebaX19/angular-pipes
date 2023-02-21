import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nombreLower: string = 'sebastian';
  nombreUpper: string = 'SEBASTIAN';
  nombreCompleto: string = 'seBaStiAn bELleSi';
  fecha: Date = new Date(); //día de hoy
}
