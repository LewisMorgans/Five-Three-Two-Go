import { async } from '@angular/core/testing';
import { RegisterComponent } from './register-component.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { of } from 'rxjs';

describe('RegisterComponentComponent', () => {
  let component: RegisterComponent;
  let mockFormBuilder = new FormBuilder();
  let mockForm = new FormGroup({})
  let mockAuthService: AuthenticationService;
  let mockRouter;

  beforeEach(async(() => {

    mockRouter = {
      navigate: jasmine.createSpy('navigate')
    };

    mockAuthService = {
      registerAccount$: () => of({})
    } as any

    mockForm = mockFormBuilder.group({
      email: 'lewis@gmail.com',
      username: 'BigChungus',
      password: 'password12345'
    });

    component = new RegisterComponent(mockFormBuilder, mockRouter, mockAuthService)
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('[InitialiseFormState] Should init the form group', () => {
    expect(component.registerForm).toBe(undefined);
    component.ngOnInit();
    expect(component.registerForm).toBeInstanceOf(FormGroup);
  });

  it('[Form Getter] Should return the account form controls object', () => {
    component.ngOnInit();
    expect(component.f).toBeInstanceOf(Object);
  });

  it('[OnSubmit] It should call the registerAccount method and redirect based on response status', () => {
    const successSpy = spyOn(mockAuthService, 'registerAccount$').and.returnValue(of({
      status: 200,
      message: 'Success'
    }));

    let payload = {
      email: 'lewis@gmail.com',
      username: 'BigChungus',
      password: 'password12345'
    }
    component.ngOnInit();
    component.registerForm = mockForm;
    component.onSubmit();
    expect(successSpy).toHaveBeenCalledWith(payload);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['sign-in']);
  })
});
