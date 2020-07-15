import { LoginPageComponent } from './login-page.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { of } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let mockRouter;
  let mockFormBuilder = new FormBuilder();
  let mockForm = new FormGroup({})
  let mockAuthService: AuthenticationService

  beforeEach(() => {
    mockRouter = {
      navigate: jasmine.createSpy('navigate')
    };

    mockAuthService = {
      decodeToken: () => { },
      login$: () => of({}),
      storeUserData: () => { },
      loggedIn$: () => of(true)
    } as any

    mockForm = mockFormBuilder.group({
      email: 'lewis@gmail.com',
      password: 'password12345'
    });

    component = new LoginPageComponent(mockFormBuilder, mockRouter, mockAuthService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('[InitialiseFormState] Should init the form group', () => {
    expect(component.loginForm).toBe(undefined);
    component.ngOnInit();
    expect(component.loginForm).toBeInstanceOf(FormGroup);
  });

  it('[Form Getter] Should return the account form controls object', () => {
    component.ngOnInit();
    expect(component.f).toBeInstanceOf(Object);
  });

  it('[OnSubmit] - Successful - It should both call the validation checker and the authentication services', () => {

    const loginSpy = spyOn(mockAuthService, 'login$').and.returnValue(of({
      status: 200,
      user: 'Lewis',
      token: 'token123456789'
    }));
    const storeDataSpy = spyOn(mockAuthService, 'storeUserData').and.callThrough();
    const loggedInSpy = spyOn(mockAuthService, 'loggedIn$').and.callThrough();

    component.ngOnInit();
    component.loginForm = mockForm;
    component.onSubmit();
    expect(loginSpy).toHaveBeenCalledWith(component.f.email.value, component.f.password.value);
    expect(storeDataSpy).toHaveBeenCalledWith('token123456789', 'Lewis');
    expect(loggedInSpy).toHaveBeenCalled();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['finances']);

  });

  it('[OnSubmit] - (Un)Successful - It should both call the validation checker and the authentication services', () => {
    spyOn(mockAuthService, 'login$').and.returnValue(of({
      status: 500,
      user: null,
      token: null
    }));
    component.ngOnInit();
    component.loginForm = mockForm;
    component.onSubmit();
    expect(mockRouter.navigate).not.toHaveBeenCalled();
  });

});
