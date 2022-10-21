import { AfterViewChecked, AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appFieldError]'
})
export class FieldErrorDirective implements AfterViewChecked {
  @Input() appFieldError?: AbstractControl

  constructor(private element: ElementRef<HTMLElement>) { }

  ngAfterViewChecked(): void {
    const element = this.element.nativeElement;

    if (!this.appFieldError) element.hidden = true;
    else element.hidden = this.appFieldError.pristine || this.appFieldError.valid;
  }
}
