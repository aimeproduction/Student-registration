import { TestBed } from '@angular/core/testing';

import { ConfirmLeavingGuard } from './confirm-leaving.guard';

describe('ConfirmLeavingGuard', () => {
  let guard: ConfirmLeavingGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ConfirmLeavingGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
