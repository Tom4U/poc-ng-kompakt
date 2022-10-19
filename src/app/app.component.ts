import { Component } from "@angular/core";
import { DateHelper } from "src/shared/code-helpers/date-helper";

@Component({
  selector: "app-root",
  template: `<app-home></app-home>`,
})
export class AppComponent {
  constructor() {
    console.log(
      `${DateHelper.toHourAndMinutesString()} Anwendung wurde gestartet`
    );
  }
}
