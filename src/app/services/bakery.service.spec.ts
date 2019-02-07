import { TestBed } from '@angular/core/testing';

import { BakeryService } from './bakery.service';

describe('BakeryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BakeryService = TestBed.get(BakeryService);
    expect(service).toBeTruthy();
  });
});
