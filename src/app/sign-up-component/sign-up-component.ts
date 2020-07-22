import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sign-up-component',
  templateUrl: './sign-up-component.html',
  styleUrls: ['./sign-up-component.scss']
})
export class SignUpComponent {

  firstName: string;
  lastName: string;
  email: string;
  password: string;

  userCreated: boolean;
  error: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  signUp() {
    this.userCreated = false;
    this.error = false;

    const user = new User();
    user.firstName = this.firstName;
    user.lastName = this.lastName;
    user.email = this.email;
    user.password = this.password;

    if (user) {
        this.authService.signup(user).then(result => {
            this.userCreated = true;
          }).catch(err => {
            this.error = true;
          });
    }
  }

}
