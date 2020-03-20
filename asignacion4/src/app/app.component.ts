import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'asignacion4';

  oddNumber: number[] = [];
  evenNumber: number[] = [];

  onEventoDisparado(numeroRecibido: number) {
    console.log(numeroRecibido);
    if (numeroRecibido % 2 === 0) {
      this.evenNumber.push(numeroRecibido);
    } else {
      this.oddNumber.push(numeroRecibido);
    }

  }
}
