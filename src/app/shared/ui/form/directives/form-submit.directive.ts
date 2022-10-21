import { AfterViewChecked, Directive, ElementRef, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: '[appFormSubmit]'
})
export class FormSubmitDirective implements AfterViewChecked {
  @Input() appFormSubmit?: FormGroup

  constructor(private element: ElementRef<HTMLButtonElement | HTMLInputElement>) { }

  ngAfterViewChecked(): void {
    const element = this.element.nativeElement;
    if (!this.appFormSubmit) element.disabled = false;
    else element.disabled = this.appFormSubmit.dirty && this.appFormSubmit.invalid;
  }
}
