import { Component } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { TasksService } from './services/tasks.service';

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.scss"],
})
export class TasksComponent {
  showForm = false;

  constructor(private tasksSvc: TasksService, headerSvc: HeaderService) {
    headerSvc.changeHeader('Aufgaben');
  }

  addTask(): void {
    this.showForm = true;
  }

  hideForm(): void {
    this.showForm = false;
  }
}
