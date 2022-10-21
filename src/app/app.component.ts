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
  greeterActive = false;
  tasksActive = true;
  currentDate = new Date();

  constructor(headerSvc: HeaderService, changeDetector: ChangeDetectorRef) {
    headerSvc.headingChange.subscribe((heading: string) => {
      this.title = heading;
      changeDetector.detectChanges();
    });
  }

  headerActions: Command[] = [
    new Command(
      "Greeter",
      'greeter',
      () => true
    ),
    new Command(
      "Aufgaben",
      'tasks',
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
