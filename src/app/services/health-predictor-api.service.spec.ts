import { TestBed } from '@angular/core/testing';

import { HealthPredictorApiService } from './health-predictor-api.service';

describe('HealthPredictorApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HealthPredictorApiService = TestBed.get(HealthPredictorApiService);
    expect(service).toBeTruthy();
  });
});
