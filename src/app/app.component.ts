import { Component } from "@angular/core";
import { DateHelper } from "src/shared/code-helpers/date-helper";
import { HeaderAction } from "./header-action";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Mein Verein";
  year = new Date().getFullYear();
  authenticated = false;
  headerActions: HeaderAction[] = [
    new HeaderAction(
      "Anmelden",
      () => (this.authenticated = true),
      () => !this.authenticated
    ),
    new HeaderAction(
      "Abmelden",
      () => (this.authenticated = false),
      () => this.authenticated
    ),
  ];

  constructor() {
    console.log(
      `${DateHelper.toHourAndMinutesString()} Anwendung wurde gestartet`
    );
  }
}
