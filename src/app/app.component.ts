import { Component } from "@angular/core";
import { DateHelper } from "src/shared/code-helpers/date-helper";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Mein Verein";
  year = new Date().getFullYear();

  constructor() {
    console.log(
      `${DateHelper.toHourAndMinutesString()} Anwendung wurde gestartet`
    );
  }
}
