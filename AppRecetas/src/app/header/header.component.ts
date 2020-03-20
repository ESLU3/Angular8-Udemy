import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() eleccion = new EventEmitter<string>();

  constructor() { }

  collapsed = true;

  ngOnInit() {
  }

  mostrarRecetas() {
    this.eleccion.emit('receta');
  }

  mostrarCompras() {
    this.eleccion.emit('listaCompra');

  }

}
