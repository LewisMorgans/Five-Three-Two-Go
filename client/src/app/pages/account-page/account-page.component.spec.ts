import { AccountPageComponent } from './account-page.component';
import { FormBuilder, FormGroup } from '@angular/forms';

fdescribe('AccountPageComponent', () => {
  let component: AccountPageComponent;

  let _fb = new FormBuilder();
  let form = new FormGroup({})
  let _authenticationService;


  beforeEach(() => {

    form = _fb.group({
      username: 'lewis',
      email: 'lewis@gmail.com',
      password: 'fakepass'
    });

    _authenticationService = {
      updateAccount$: () => { },
      resetPassword$: () => { },
      deleteAccount: () => { }
    }


    component = new AccountPageComponent(_fb, _authenticationService)
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('Should initialise the form state', () => {
    component.ngOnInit();
    expect(component.accountForm.valid).toBe(false)
  });

  fit('Should return the account form controls object', () => {
    component.ngOnInit();
    expect(component.f).toBeInstanceOf(Object)

  });

  fit('Should call the authentication service if form values valid', () => {
    const spy = spyOn(component, 'saveAccount').and.callThrough();
    component.accountForm = form;
    component.saveAccount();
    expect(spy).toHaveBeenCalled();
    expect(component.submitted).toEqual(true);
  });

  fit('Should call resetPassword method from authentication service', () => {
    const spy = spyOn(_authenticationService, 'resetPassword$').and.callThrough();
    let password = form.controls['password'].value;
    component.resetPassword();
    expect(spy).toHaveBeenCalled();
  })

  fit('Should call delete account method from authentication service', () => {
    const spy = spyOn(_authenticationService, 'deleteAccount').and.callThrough();
    component.deleteAccount();
    expect(spy).toHaveBeenCalled();
  })
});
