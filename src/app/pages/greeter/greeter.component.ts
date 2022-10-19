import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NameService } from 'src/app/services/name.service';

@Component({
  selector: "app-greeter",
  templateUrl: "./greeter.component.html"
})
export class GreeterComponent {
  greeting = "";

  get hasGreeting(): boolean {
    return this.greeting.length > 0;
  }

  constructor(title: Title, nameSvc: NameService) {
    const oldTitle = title.getTitle();
    title.setTitle(`${oldTitle} | Greeter`);

    nameSvc.nameChange.subscribe(name => this.setGreeting(name));
  }

  setGreeting(name: string): void {
    this.greeting = `Hallo ${name}`;
  }
}
