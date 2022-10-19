import { Component } from "@angular/core";
import { Command } from "src/app/shared/ui/command/command";
import { Login } from "src/app/shared/ui/login/login";

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
  showError = false;

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
  }

  doLogout(): void {
    this.authenticated = false;
  }

  validateLogin(login: Login): void {
    if (!login) {
      this.showLogin = false;
      return;
    }

    const user = 'user';
    const pass = '1234';
    const isValid = login.username === user && login.password === pass;
    this.authenticated = isValid;
    
    if (isValid) {
      this.showLogin = false;
      this.showError = false;
    } else {
      this.showError = true;
    }
  }
}
