import { TestBed } from '@angular/core/testing';

import { TeslaConfigService } from './tesla-config.service';

describe('TeslaConfigService', () => {
  let service: TeslaConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeslaConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
