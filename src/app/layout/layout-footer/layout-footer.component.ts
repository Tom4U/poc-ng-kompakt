import { Component, Input } from "@angular/core";

@Component({
  selector: "app-layout-footer",
  template: `<p *ngIf="copyright.length > 0">&copy; {{ copyright }}</p>`,
})
export class LayoutFooterComponent {
  @Input() copyright = "";
}
