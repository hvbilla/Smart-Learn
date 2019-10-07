import { TestBed } from '@angular/core/testing';

import { NutritionserviceService } from './nutritionservice.service';

describe('NutritionserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NutritionserviceService = TestBed.get(NutritionserviceService);
    expect(service).toBeTruthy();
  });
});
