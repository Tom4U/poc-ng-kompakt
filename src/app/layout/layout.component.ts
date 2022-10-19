import { Component, Input } from "@angular/core";
import { Command } from "../shared/ui/command/command";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["layout.component.scss"],
})
export class LayoutComponent {
  @Input() copyright = "";
  @Input() commands: Command[] = [];
  @Input() title = ''
}
