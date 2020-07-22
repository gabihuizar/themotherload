import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()

export class AuthService {

  url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  login(email: string, password: string ): Promise<boolean> {
    return this.http.post<{token: string}>(this.url + '/auth', {email, password}).pipe(map(result => {
      localStorage.setItem('access_token', result.token);
      return true;
    })).toPromise();
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  signup(user: User): Promise<boolean> {
    const signupRequest = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password
    };

    return this.http.post<string>(this.url + '/signup', signupRequest).pipe(map(result => {
      return true;
    })).toPromise();
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }
}

export class User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
