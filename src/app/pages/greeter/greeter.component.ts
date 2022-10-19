import { Component } from '@angular/core';
import { Command } from 'src/app/shared/ui/command/command';

@Component({
  selector: "app-greeter",
  templateUrl: "./greeter.component.html"
})
export class GreeterComponent {
  greeting = "";

  get hasGreeting(): boolean {
    return this.greeting.length > 0;
  }

  setGreeting(name: string): void {
    this.greeting = `Hallo ${name}`;
  }
}
