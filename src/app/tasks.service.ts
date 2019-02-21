import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './task.model';
import { HttpApiService } from './http-api.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  resource = 'tasks/';
  constructor(private apiService: HttpApiService) { }

  create(task: Task): Observable<Task> {
    return this.apiService.put<Task>(this.resource, task);
  }
  getAll(): Observable<Task[]> {
    return this.apiService.get<Task[]>(this.resource);
  }
  getById(id: number): Observable<Task> {
    return this.apiService.get<Task>(this.resource + id);
  }
  update(task: Task): Observable<Task> {
    return this.apiService.post<Task>(this.resource, task);
  }
  delete(id: number): Observable<Task> {
    return this.apiService.delete<Task>(this.resource + id);
  }
}
