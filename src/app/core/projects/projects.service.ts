import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  url = 'http://localhost:3000/api/projects/';
  constructor(private http: HttpClient) { }

  getProjects(companyId: number): Promise<Project[]> {
    return this.http.get<Project[]>(this.url + `${companyId}`).toPromise();
  }
}

export class Project {
  id: number;
  name: string;
  customerId: number;
}
