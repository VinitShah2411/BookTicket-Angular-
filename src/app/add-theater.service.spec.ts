import { TestBed } from '@angular/core/testing';

import { AddTheaterService } from './add-theater.service';

describe('AddTheaterService', () => {
  let service: AddTheaterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddTheaterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
