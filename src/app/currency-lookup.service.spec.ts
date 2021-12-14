import { TestBed } from '@angular/core/testing';

import { CurrencyLookupService } from './currency-lookup.service';

describe('CurrencyLookupService', () => {
  let service: CurrencyLookupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyLookupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
