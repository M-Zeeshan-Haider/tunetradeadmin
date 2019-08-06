import { TestBed } from '@angular/core/testing';

import { GetTokenRequestsService } from './get-token-requests.service';

describe('GetTokenRequestsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetTokenRequestsService = TestBed.get(GetTokenRequestsService);
    expect(service).toBeTruthy();
  });
});
