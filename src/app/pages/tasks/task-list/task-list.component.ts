import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../task';

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent {
  tasks: Task[] = [];
  
  constructor(tasksSvc: TasksService, changeDetector: ChangeDetectorRef) {
    tasksSvc.tasksChange.subscribe(tasks => {
      this.tasks = tasks;
      changeDetector.detectChanges();
    });

    tasksSvc.loadTasks();
  }
}
