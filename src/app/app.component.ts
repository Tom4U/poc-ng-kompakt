import { Component } from "@angular/core";
import { NameService } from "./services/name.service";
import { Command } from "./shared/ui/command/command";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Begrüßung";
  showAction1 = false;
  nameFromForm = ''
  
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

  constructor(nameSvc: NameService) {
    nameSvc.nameChange.subscribe(name => this.nameFromForm = name);
  }
}
