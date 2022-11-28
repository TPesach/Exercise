import { TestBed } from '@angular/core/testing';

import { PersonLocalDetailsService } from './person-local-details.service';

describe('PersonLocalDetailsService', () => {
  let service: PersonLocalDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonLocalDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
