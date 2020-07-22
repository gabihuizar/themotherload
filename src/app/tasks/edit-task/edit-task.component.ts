import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../core/task/task.service';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../../core/task/task';
import { SessionService } from 'src/app/session.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  task: Task;

  loading: boolean;
  error: boolean;
  taskUpdated: boolean;
  inSession: boolean;

  sessionId: number;

  constructor(private taskService: TaskService,
              private sessionService: SessionService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.loading = true;
    const taskId = this.route.snapshot.paramMap.get('id');

    this.taskService.getTaskById(parseInt(taskId)).then((task: Task) => {
      this.task = task;
    }).catch((err) => {
      this.error = true;
    }).finally(() => {
      this.loading = false;
    });

    // get any existing session
  }

  async startTask() {
    await this.sessionService.startSession(this.task.id).then((result: StartSessionResult) => {
      this.sessionId = result.sessionId;
      this.inSession = true;
    }).catch(err => {
      this.error = true;
    });
  }

  async endTask() {
    await this.sessionService.endSession(this.sessionId, this.task.id).then((result) => {
      this.inSession = false;
    }).catch(() => {
      this.error = true;
    });
  }

  // edittask() {
  //   this.loading = true;
  //   this.taskService.edittask(this.task).then(() => {
  //     this.taskUpdated = true;
  //   }).catch(() => {
  //     this.error = true;
  //   }).finally(() => {
  //     this.loading = false;
  //   });
  // }

  // deletetask() {
  //   this.loading = true;
  //   this.taskService.deletetaskById(this.task.id).then(() => {
  //     this.task = undefined;
  //   }).catch(() => {
  //     this.error = true;
  //   }).finally(() => {
  //     this.loading = false;
  //   });
  // }

}

export class StartSessionResult {
  sessionId: number;
}
