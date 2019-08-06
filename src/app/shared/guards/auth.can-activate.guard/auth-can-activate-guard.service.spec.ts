import { TestBed } from '@angular/core/testing';

import { AuthCanActivateGuardService } from './auth-can-activate-guard.service';

describe('AuthCanActivateGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthCanActivateGuardService = TestBed.get(AuthCanActivateGuardService);
    expect(service).toBeTruthy();
  });
});
