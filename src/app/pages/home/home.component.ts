import { AfterViewChecked, AfterViewInit, Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { Command } from "src/app/shared/ui/command/command";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewChecked {
  private year = new Date().getFullYear();

  copyright = `${this.year} by Das Angular Training Team ;)`;
  authenticated = false;

  commands: Command[] = [
    new Command(
      "Anmelden",
      () => this.router.navigate(['anmeldung']),
      () => !this.authenticated
    ),
    new Command(
      "Abmelden",
      () => this.router.navigate(['']),
      () => this.authenticated
    ),
  ];

  constructor(private auth: AuthService, private router: Router) {}

  ngAfterViewChecked(): void {
    this.auth.authenticated.subscribe((authenticated) => {
      this.authenticated = authenticated;
    });
  }
}
