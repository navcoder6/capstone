import { TestBed, inject } from '@angular/core/testing';

import { EsimService } from './esim.service';

describe('EsimService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EsimService]
    });
  });

  it('should be created', inject([EsimService], (service: EsimService) => {
    expect(service).toBeTruthy();
  }));
});
