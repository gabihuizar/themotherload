import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  title = 'login';

  email: string;
  password: string;
  error: boolean;

  constructor(
    private authService: AuthService,
    private router: Router) {
    }

  login() {
    if (this.email && this.password) {
        this.authService.login(this.email, this.password).then(result => {
            this.router.navigate(['projects']);
          }).catch(err => {
          this.error = true;
        });
    }
  }
}