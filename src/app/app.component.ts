import { Component } from "@angular/core";
import { Command } from "./shared/ui/command/command";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Begrüßung";
  showAction1 = false;
  sayHelloCommand = new Command(
    "Sag Hallo",
    () => {},
    () => true
  );

  headerActions: Command[] = [
    new Command(
      "Aktion 1",
      () => console.log("Aktion 1 geklickt"),
      () => this.showAction1
    ),
    new Command(
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
