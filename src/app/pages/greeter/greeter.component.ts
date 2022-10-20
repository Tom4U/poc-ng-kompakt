import { Component } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: "app-greeter",
  templateUrl: "./greeter.component.html"
})
export class GreeterComponent {
  greeting = "";

  get hasGreeting(): boolean {
    return this.greeting.length > 0;
  }

  constructor(headerSvc: HeaderService) {
    headerSvc.changeHeader('Greeter');
  }

  setGreeting(name: string): void {
    this.greeting = `Hallo ${name}`;
  }
}
