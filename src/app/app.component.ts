import { Component } from "@angular/core";
import { HeaderAction } from "./header-action";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Begrüßung";
  showAction1 = false;

  headerActions: HeaderAction[] = [
    new HeaderAction(
      "Aktion 1",
      () => console.log("Aktion 1 geklickt"),
      () => this.showAction1
    ),
    new HeaderAction(
      "Aktion 2",
      () => console.log("Aktion 2 geklickt"),
      () => true
    ),
  ];

  get hasGreeting(): boolean {
    return this.greeting.length > 0;
  }

  private greeting = "";
}
