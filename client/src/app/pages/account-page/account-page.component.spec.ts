import { AccountPageComponent } from './account-page.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { of } from 'rxjs';

describe('AccountPageComponent', () => {
  let component: AccountPageComponent;
  let _fb = new FormBuilder();
  let form = new FormGroup({})
  let _authenticationService: AuthenticationService

  beforeEach(() => {

    form = _fb.group({
      username: 'lewis',
      email: 'lewis@gmail.com',
      password: 'fakepass'
    });

    _authenticationService = {
      updateAccount$: () => of({ }),
      deleteAccount: () => of({ }),
      updatePassword$: () => of({ }),
      getUser$: () => of([
        {
          name: 'lewis',
          email: 'lewis1234@gmail.com',
          password: 'password12345'
        }
      ]
        
      )
    } as any

    component = new AccountPageComponent(_fb, _authenticationService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('[IntialiseFormState] Should initialise the form state', () => {
    expect(component.accountForm).toBe(undefined);
    component.ngOnInit();
    expect(component.accountForm).toBeInstanceOf(FormGroup);
  });

  it('[Form Getter] Should return the account form controls object', () => {
    component.ngOnInit();
    expect(component.f).toBeInstanceOf(Object)
  });

  it('[SaveAccount] Should call the authentication service if form values valid', () => {
    const spy = spyOn(component, 'saveAccount').and.callThrough();
    component.accountForm = form;
    component.saveAccount();
    expect(spy).toHaveBeenCalled();
  });

  it('[Save Password] Should save password if form field is valid', () => {
    const spy = spyOn(component, 'savePassword').and.callThrough();
    component.accountForm = form;
    component.savePassword();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(component.accountForm.controls['password'].value).toEqual('');
  })

  it('[DeleteAccount] Should call delete account method from authentication service', () => {
    const spy = spyOn(_authenticationService, 'deleteAccount').and.callThrough();
    component.deleteAccount();
    expect(spy).toHaveBeenCalled();
  })
});
