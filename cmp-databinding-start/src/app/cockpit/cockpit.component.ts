import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  serverElements = [];
  newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;
  // con output puedo hacer que se escuche un evento
  @Output() serverCreated = new EventEmitter<{serverName: string; serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string; serverContent: string}>();

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    // console.log(this.serverContentInput);

    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint() {
   this.blueprintCreated.emit({
    serverName: this.newServerName,
    serverContent: this.serverContentInput.nativeElement.value});
  }
}
