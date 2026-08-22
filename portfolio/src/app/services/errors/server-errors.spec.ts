import { TestBed } from '@angular/core/testing';

import { ServerErrors } from './server-errors';

describe('ServerErrors', () => {
  let service: ServerErrors;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerErrors);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
