import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

 @Output() juegoIniciado = new EventEmitter<number>();

 cant = 0;
  ref;
  constructor() { }

  ngOnInit() {
  }

  iniciarJuego() {
    this.ref = setInterval(() => {

      this.juegoIniciado.emit(this.cant + 1);
      this.cant++;

    }, 1000);
  }

  detenerJuego() {
    clearInterval(this.ref);
  }

}
