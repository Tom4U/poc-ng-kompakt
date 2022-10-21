import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TasksService } from '../services/tasks.service';
import { Task } from '../task';

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent {
  tasks: Observable<Task[]>;
  
  constructor(private tasksSvc: TasksService, changeDetector: ChangeDetectorRef) {
    /*tasksSvc.tasksChange.subscribe(tasks => {
      this.tasks = tasks;
      changeDetector.detectChanges();
    });*/

    //tasksSvc.loadTasks();

    this.tasks = tasksSvc.getTasks()
  }
}
