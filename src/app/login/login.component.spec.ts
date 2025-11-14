import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to the welcome page when the form is valid', () => {
    const navigateSpy = spyOn(router, 'navigate').and.resolveTo(true);

    component.loginForm.setValue({ username: 'aaaaaa', password: 'bbbbbb' });
    component.onSubmit();

    expect(navigateSpy).toHaveBeenCalledWith(['/welcome']);
  });
});