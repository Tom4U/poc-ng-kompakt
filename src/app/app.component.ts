import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from "@angular/core";
import { environment } from "src/environments/environment";
import { HeaderService } from "./services/header.service";
import { Command } from "./shared/ui/command/command";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = environment.appName;
  greeterActive = true;
  tasksActive = false;

  constructor(headerSvc: HeaderService, changeDetector: ChangeDetectorRef) {
    headerSvc.headingChange.subscribe(heading => {
      this.title = heading;
      changeDetector.detectChanges();
    });
  }

  headerActions: Command[] = [
    new Command(
      "Greeter",
      () => this.showGreeter(),
      () => true
    ),
    new Command(
      "Aufgaben",
      () => this.showTasks(),
      () => true
    ),
  ];

  showGreeter(): void {
    this.greeterActive = true;
    this.tasksActive = false;
  }

  showTasks() {
    this.greeterActive = false;
    this.tasksActive = true;
  }
}
