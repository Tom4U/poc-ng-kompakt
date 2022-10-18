import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1 class="default-bg">Hallo Welt!</h1>`,
  styles: ['h1 {text-align: center; padding-top: var(--default-padding); padding-bottom: var(--default-padding);}']
})
export class AppComponent {
  title = 'my-demo';
}
