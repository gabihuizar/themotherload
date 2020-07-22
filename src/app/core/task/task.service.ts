import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  url = 'http://localhost:3000/api/tasks/';

  constructor(private http: HttpClient) { }

  // this doesn't belong here
  async getTasksByProjectId(projectId: number): Promise<Task[]> {
    const url = 'http://localhost:3000/api/projects/';
    return await this.http.get<Task[]>(url + `${projectId}/tasks`).pipe().toPromise();
  }

  async getTaskById(id: number): Promise<Task> {
    return await this.http.get<Task>(this.url + `${id}`).pipe().toPromise();
  }

  async addTask(addTaskRequest: AddTaskRequest): Promise<void> {
    return await this.http.post<void>(this.url, addTaskRequest).pipe().toPromise();
  }

  // async editTask(task: Task): Promise<Task> {
  //   return await this.http.put<Task>(this.url, task).pipe().toPromise();
  // }

  // async getTaskById(id: number): Promise<Task> {
  //   return await this.http.get<Task>(this.url + `/${id}`).pipe().toPromise();
  // }

  // async deleteTaskById(id: number): Promise<void> {
  //   return await this.http.delete<void>(this.url + `/${id}`).pipe().toPromise();
  // }
}

export class AddTaskRequest {
  projectId: number;
  description: string;
  userId: number;
}
