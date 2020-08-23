/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { YouYouGuardService } from './you-you-guard.service';

describe('Service: YouYouGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YouYouGuardService]
    });
  });

  it('should ...', inject([YouYouGuardService], (service: YouYouGuardService) => {
    expect(service).toBeTruthy();
  }));
});
