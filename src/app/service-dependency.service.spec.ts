import { TestBed } from '@angular/core/testing';

import { ServiceDependencyService } from './service-dependency.service';

describe('ServiceDependencyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceDependencyService = TestBed.get(ServiceDependencyService);
    expect(service).toBeTruthy();
  });
});
