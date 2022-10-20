import { Component } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
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

  commands: Command[] = [
    new Command(
      "Anmelden",
      () => this.showLogin = true,
      () => !this.authenticated
    ),
    new Command(
      "Abmelden",
      () => this.auth.logout(),
      () => this.authenticated
    ),
  ];

  constructor(private auth: AuthService) {
    auth.authenticated.subscribe(authenticated => {
      this.authenticated = authenticated;
    });
  }

  closeLogin(): void {
    this.showLogin = false;
  }
}
