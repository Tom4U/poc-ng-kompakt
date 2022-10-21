import { Component } from "@angular/core";
import { DateHelper } from "src/shared/code-helpers/date-helper";

@Component({
  selector: "app-root",
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  constructor() {
    console.log(
      `${DateHelper.toHourAndMinutesString()} Anwendung wurde gestartet`
    );
  }
}
