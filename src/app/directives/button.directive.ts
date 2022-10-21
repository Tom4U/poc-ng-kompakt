import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective implements AfterViewInit {
  @Input() appButton?: 'default' | 'warn';

  constructor(private element: ElementRef<HTMLElement>) { }

  ngAfterViewInit(): void {
    const cssClass =
      this.appButton === "warn" ? "warn-button" : "default-button";

      this.element.nativeElement.classList.add(cssClass);
  }
}
