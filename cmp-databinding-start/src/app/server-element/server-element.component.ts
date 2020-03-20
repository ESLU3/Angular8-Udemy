import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ServerElementComponent implements OnInit,
OnChanges, DoCheck, AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {

  constructor() {
    console.log('constructor call');

  }
// acá se le puede poner un alias al coso
// tslint:disable-next-line: no-input-rename
@Input('srvElement') element: {type: string, name: string, content: string};
@Input() name: string;
@ViewChild('heading', {static: true}) header: ElementRef;
@ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  ngAfterContentInit(): void {
    console.log('afterContentInit call');
    console.log('paragrahp: ' + this.paragraph.nativeElement.textContent);


  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('ngOnChanges call');
    console.log(changes);
  }

  ngOnInit() {

    console.log('ngOnInit call');
    console.log('text content' + this.header.nativeElement.textContent);
    console.log('paragrahp: ' + this.paragraph.nativeElement.textContent);



  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('ngDoCheck call');


  }

  ngAfterContentChecked(){
    console.log('afterContentChecked call');

  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked call');

  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit call');
    console.log('text content' + this.header.nativeElement.textContent);


  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('ngOnDestroy call');

  }

}
