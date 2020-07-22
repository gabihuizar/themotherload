import { Injectable } from '@angular/core';

@Injectable()
export class MockAuthService {
    constructor() {}

    loggedIn(): boolean {
        return true;
    }
}