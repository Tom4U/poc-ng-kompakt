import { Component, Input } from "@angular/core";
import { Command } from "src/app/shared/ui/command/command";

@Component({
  selector: "app-layout-header",
  templateUrl: "./layout-header.component.html",
  styleUrls: ["./layout-header.component.scss"],
})
export class LayoutHeaderComponent {
  @Input() title = "";
  @Input() commands: Command[] = [];
}
