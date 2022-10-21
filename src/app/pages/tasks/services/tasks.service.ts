import { EventEmitter, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasksChange = new EventEmitter<Task[]>()

  private tasksCache: Task[] = []

  addTask(task: Task): void {
    task.id = this.generateId();
    this.tasksCache.push(task);

    this.loadTasks();
  }

  loadTasks(): void {
    this.tasksChange.emit(this.tasksCache);
  }

  getTasks(): Observable<Task[]> {
    return of(this.tasksCache);
  }

  private generateId(): number {
    const id = this.tasksCache.reduce((lastId, task) => {
      if (task.id > lastId) return task.id;

      return ++lastId;
    }, 0);

    return id;
  }
}
