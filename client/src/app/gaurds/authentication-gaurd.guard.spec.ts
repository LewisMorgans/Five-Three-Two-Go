import { TestBed } from '@angular/core/testing';

import { AuthenticationGaurdGuard as AuthenticationGaurd } from './authentication-gaurd.guard';
import { AuthenticationService } from '../services/authentication.service';

describe('AuthenticationGaurdGuard', () => {
  let guard: AuthenticationGaurd;
  let mockAuthenticationService: AuthenticationService;

  beforeEach(() => {

    

    guard = new AuthenticationGaurd(mockAuthenticationService)
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
