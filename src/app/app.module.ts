import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatMenuModule, MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { SignUpComponent } from './sign-up-component/sign-up-component';
import { HomeComponent } from './home/home.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskService } from './core/task/task.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { CommonModule, DatePipe } from '@angular/common';
import { EditTaskComponent } from './tasks/edit-task/edit-task.component';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { ProjectListComponent } from './project-list/project-list.component';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'projects',
    component: ProjectListComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'projects/:id/tasks',
    component: TaskListComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'tasks/:id/edit',
    component: EditTaskComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'tasks/add',
    component: AddTaskComponent,
    canActivate: [
      AuthGuard
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    HomeComponent,
    TaskListComponent,
    EditTaskComponent,
    AddTaskComponent,
    ProjectListComponent
  ],
  imports: [
    LoginModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule, MatFormFieldModule, MatInputModule, MatMenuModule, MatIconModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:3000'],
        blacklistedRoutes: ['localhost:/3000/api/auth']
      }
    }),
    CommonModule
  ],
  providers: [
    TaskService,
    AuthService,
    AuthGuard,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
