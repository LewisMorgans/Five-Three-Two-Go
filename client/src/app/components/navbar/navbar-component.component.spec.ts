import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponentComponent as NavbarComponent } from './navbar-component.component';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { of } from 'rxjs';

describe('NavbarComponentComponent', () => {
  let component: NavbarComponent;
  let mockRouter;
  let _authenticationService: AuthenticationService;

  beforeEach(async(() => {

    mockRouter = { 
      navigate: jasmine.createSpy('navigate') 
    };

    _authenticationService = {
      loggedIn$: () => of(true)
    } as any

    component = new NavbarComponent(mockRouter, _authenticationService)

  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should handle which page to navigate to depending on the params passed', () => {
    let params = 'signin';
    component.handleClick(params)
    expect(mockRouter.navigate).toHaveBeenCalledWith(['sign-in']);

    params = 'register';
    component.handleClick(params);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['register']);
  })
});
