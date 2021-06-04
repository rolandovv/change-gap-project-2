import { TestBed, inject } from '@angular/core/testing';

import { SuportService } from './suport.service';

describe('SuportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuportService]
    });
  });

  it('should be created', inject([SuportService], (service: SuportService) => {
    expect(service).toBeTruthy();
  }));
});
