import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  cantActInact = 0;
  cantInactAct = 0;
  // cantActInact = new EventEmitter<number>();
  // cantInactAct = new EventEmitter<number>();

  constructor() { }

  incrementarActInact() {
    this.cantActInact++;
    console.log('Cantidad de activos a inactivos incrementado a ' + this.cantActInact);
  }
  incrementarInactAct() {
    this.cantInactAct++;
    console.log('Cantidad de inactivos a activos incrementado a ' + this.cantInactAct);
  }
}
