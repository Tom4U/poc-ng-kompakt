import { Component } from "@angular/core";
import { Command } from "src/app/shared/ui/command/command";

@Component({
  selector: "app-home",
  template: ` 
  <app-layout title="Mein Verein" [commands]="commands" [copyright]="copyright">
    <p>Willkommen!</p>
  </app-layout>`,
  styles: [],
})
export class HomeComponent {
  private year = new Date().getFullYear();

  copyright = `${this.year} by Das Angular Training Team ;)`;

  authenticated = false;
  commands: Command[] = [
    new Command(
      "Anmelden",
      () => (this.authenticated = true),
      () => !this.authenticated
    ),
    new Command(
      "Abmelden",
      () => (this.authenticated = false),
      () => this.authenticated
    ),
  ];
}
