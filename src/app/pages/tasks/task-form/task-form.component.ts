import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TasksService } from '../services/tasks.service';
import { Task } from '../task';
import { User } from '../user';

@Component({
  selector: "app-task-form",
  templateUrl: "./task-form.component.html",
  styleUrls: ["./task-form.component.scss"],
})
export class TaskFormComponent {
  @Input() task = new Task('', new User(''));
  @Output() formClose = new EventEmitter();
  form: FormGroup;

  constructor(private tasksSvc: TasksService, formBuilder: FormBuilder) {
    this.form = this.task.toFormGroup(formBuilder);
  }

  close(): void {
    this.formClose.emit();
  }

  save(): void {
    if (this.form.valid) {
      this.tasksSvc.addTask(<Task>this.form.value);
      this.close();
    }
  }
}
