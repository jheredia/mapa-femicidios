import { TestBed, inject } from '@angular/core/testing';

import { FemicideService } from './femicide.service';

describe('FemicideService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FemicideService]
    });
  });

  it('should be created', inject([FemicideService], (service: FemicideService) => {
    expect(service).toBeTruthy();
  }));
});
