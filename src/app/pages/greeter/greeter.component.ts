import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: "app-greeter",
  templateUrl: "./greeter.component.html"
})
export class GreeterComponent {
  greeting = "";

  get hasGreeting(): boolean {
    return this.greeting.length > 0;
  }

  constructor(title: Title) {
    const oldTitle = title.getTitle();
    title.setTitle(`${oldTitle} | Greeter`);
  }

  setGreeting(name: string): void {
    this.greeting = `Hallo ${name}`;
  }
}
