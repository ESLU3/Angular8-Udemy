import { Directive, HostBinding, HostListener, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen = false;




  // @HostListener('click') toggleOpen(eventData: Event) {// con esto, solamente cierro el dropdown si le hago click directo
  //   this.isOpen = !this.isOpen;
  // }
  // constructor() { }

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) { // con esto, cierro el dropdown haciendo click en cualquier lado
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

  constructor(private elRef: ElementRef) {}


}
