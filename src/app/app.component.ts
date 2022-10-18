import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Begrüßung";

  get hasGreeting(): boolean {
    return this.greeting.length > 0;
  }

  private greeting = "";
}
