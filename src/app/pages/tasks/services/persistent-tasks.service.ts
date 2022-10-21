import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Task } from '../task';
import { TasksService } from './tasks.service';

@Injectable({
  providedIn: 'root'
})
export class PersistentTasksService extends TasksService {
  private readonly apiUrl = `${environment.apiUrl}/tasks`;

  constructor(private httpClient: HttpClient) {
    super();
   }

   override addTask(task: Task): void {
    this.httpClient
    .post(this.apiUrl, task, {
      headers: {
        contentType: 'application/json'
      }
    })
    .subscribe(() => {
      this.loadTasks();
    });
   }

   override getTasks(): Observable<Task[]> {
     return this.httpClient.get<Task[]>(this.apiUrl);
   }

   override loadTasks(): void {
    this.httpClient.get<Task[]>(this.apiUrl).subscribe(next => {
      this.tasksChange.emit(next);
    });
   }
}
