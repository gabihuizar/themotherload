import { Component, OnInit } from '@angular/core';
import { Project, ProjectsService } from '../core/projects/projects.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects: Project[];
  constructor(private projectService: ProjectsService) { }

  async ngOnInit() {
    await this.projectService.getProjects(1).then(result => {
      this.projects = result;
    });
  }

}
