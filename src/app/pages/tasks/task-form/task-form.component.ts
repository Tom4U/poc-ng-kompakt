import { Component, EventEmitter, Output } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../task';

@Component({
  selector: "app-task-form",
  templateUrl: "./task-form.component.html",
  styleUrls: ["./task-form.component.scss"],
})
export class TaskFormComponent {
  @Output() formClose = new EventEmitter();

  task = new Task('');

  constructor(private tasksSvc: TasksService) {}

  close(): void {
    this.formClose.emit();
  }

  save(): void {
    if (this.task.title.length > 0) this.tasksSvc.addTask(this.task);

    this.close();
  }
}
