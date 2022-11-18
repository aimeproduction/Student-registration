import { TestBed } from '@angular/core/testing';

import { ProtectPageListGuard } from './protect-page-list.guard';

describe('ProtectPageListGuard', () => {
  let guard: ProtectPageListGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProtectPageListGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
