import { Component } from "@angular/core";
import { Command } from "src/app/shared/ui/command/command";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private year = new Date().getFullYear();

  copyright = `${this.year} by Das Angular Training Team ;)`;
  authenticated = false;
  showLogin = false;

  commands: Command[] = [
    new Command(
      "Anmelden",
      () => this.doLogin(),
      () => !this.authenticated
    ),
    new Command(
      "Abmelden",
      () => this.doLogout(),
      () => this.authenticated
    ),
  ];

  doLogin(): void {
    this.showLogin = true;
    this.authenticated = true;
  }

  doLogout(): void {
    this.authenticated = false;
    this.showLogin = false;
  }
}
