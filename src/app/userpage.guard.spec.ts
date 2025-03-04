import { TestBed } from '@angular/core/testing';

import { UserpageGuard } from './userpage.guard';

describe('UserpageGuard', () => {
  let guard: UserpageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserpageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
