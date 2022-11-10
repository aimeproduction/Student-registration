import { TestBed } from '@angular/core/testing';

import { ListStudentGuard } from './list-student.guard';

describe('ListStudentGuard', () => {
  let guard: ListStudentGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ListStudentGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
