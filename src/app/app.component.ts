import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'motherload';

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit() {
    if (!this.auth.loggedIn) {
      this.router.navigate(['home']);
    } else {
      this.router.navigate(['projects/1/tasks']);
    }
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['home']);
  }
}
