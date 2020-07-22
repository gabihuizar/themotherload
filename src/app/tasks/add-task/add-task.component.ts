import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../core/task/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {

  error: boolean;
  loading: boolean;
  taskAdded: boolean;

  projectId: number;
  description: string;
  userId: number;

  constructor(private taskService: TaskService) { }

  addtask() {
    this.loading = true;

    const request = {
      projectId: this.projectId,
      description: this.description,
      userId: this.userId
    };

    this.taskService.addTask(request).then(() => {
      this.taskAdded = true;
    }).catch(() => {
      this.error = true;
    }).finally(() => {
      this.loading = false;
    });
  }
}
