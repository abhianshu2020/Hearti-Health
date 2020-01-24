import { TestBed } from '@angular/core/testing';

import { HealthPredictorService } from './health-predictor.service';

describe('HealthPredictorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HealthPredictorService = TestBed.get(HealthPredictorService);
    expect(service).toBeTruthy();
  });
});
