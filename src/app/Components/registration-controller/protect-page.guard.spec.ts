import { TestBed } from '@angular/core/testing';

import { ProtectPageGuard } from './protect-page.guard';

describe('ProtectPageGuard', () => {
  let guard: ProtectPageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProtectPageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
