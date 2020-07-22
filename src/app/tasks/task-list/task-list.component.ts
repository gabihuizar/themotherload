import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from '../../core/task/task';
import { TaskService } from '../../core/task/task.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: Task[];

  constructor(private taskService: TaskService,
    private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    const projectId = this.route.snapshot.paramMap.get('id');
    await this.taskService.getTasksByProjectId(parseInt(projectId)).then(result => {
      this.tasks = result;
    });
  }
}
