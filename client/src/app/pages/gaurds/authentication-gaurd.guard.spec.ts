import { TestBed } from '@angular/core/testing';

import { AuthenticationGaurdGuard } from './authentication-gaurd.guard';

describe('AuthenticationGaurdGuard', () => {
  let guard: AuthenticationGaurdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthenticationGaurdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
