import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterModule, Routes, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatMenuModule, MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service';
import { MockAuthService } from './auth/auth.service.mock';

fdescribe('AppComponent', () => {

    let fixture: ComponentFixture<AppComponent>;
    let componentInstance: AppComponent;
    const mockAuthService = new MockAuthService();
    const mockRouter = {
        navigate: jasmine.createSpy('navigate')
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ MatMenuModule, MatIconModule, RouterTestingModule ],
            declarations: [
                AppComponent
            ],
            providers: [
                { provide: AuthService, useValue: mockAuthService },
                { provide: Router, useValue: mockRouter }
            ]
        });

        fixture = TestBed.createComponent(AppComponent);
        componentInstance = fixture.componentInstance;
    });

    it('should redirect to loads when user is logged in', () => {
        fixture.detectChanges();
        expect(mockRouter.navigate).toHaveBeenCalledWith(['loads']);
    });

    // Should display menu button
});