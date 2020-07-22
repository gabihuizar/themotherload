import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StartSessionResult } from './tasks/edit-task/edit-task.component';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  url = 'http://localhost:3000/api/sessions/';

  constructor(private http: HttpClient) { }

  startSession(taskId: number): Promise<StartSessionResult> {
    return this.http.post<{sessionId: number}>(this.url, {taskId}).toPromise();
  }

  endSession(sessionId: number, taskId: number): Promise<StartSessionResult> {
    return this.http.put<{sessionId: number}>(this.url + `${sessionId}`, {taskId}).toPromise();
  }
}

