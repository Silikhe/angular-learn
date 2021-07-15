import { Injectable } from '@angular/core';
import { Task } from '../Task';
import {Observable} from 'rxjs'
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private _apiUrl = 'http://localhost:5000/tasks'

  constructor( private http: HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this._apiUrl);
  }

  deleteTask(task: Task): Observable<Task>{
    const url = `${this._apiUrl}/${task.id}`;
    return this.http.delete<Task>(url)
  }
}
