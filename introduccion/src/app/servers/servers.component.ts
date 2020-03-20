import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'no se creo el server';
  serverName = 'Test server';
  userName = '';
  serverCreated = false;
  servers = ['Testserver', 'TEstserver2'];
  mostrarPass = false;
  buttonClick = [];


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Fue creado el server ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: any) {
    this.serverName = (event.target as HTMLInputElement).value;
  }

  onResetUserName() {
    this.userName = '';
  }


  onToggleDetalles() {
    this.mostrarPass = !this.mostrarPass;

    this.buttonClick.push(new Date());

  }
}
