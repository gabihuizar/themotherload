import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
      LoginComponent
  ]
})
export class LoginModule { }
