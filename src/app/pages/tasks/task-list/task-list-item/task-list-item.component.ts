import { Component, Input } from '@angular/core';
import { Task } from '../../task';

@Component({
  selector: 'app-task-list-item',
  template: `{{task?.title}}`,
  styles: [
  ]
})
export class TaskListItemComponent {
  @Input() task?: Task;
}
