import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //  styleUrls: ['./app.component.css']
  styles: [`
    success-alert {
      color: green;
    }

    warning-alert {
      color: red;
    }
  `]
})
export class AppComponent {
  name = 'tu vieja';
}
