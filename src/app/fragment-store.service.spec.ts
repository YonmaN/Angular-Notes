/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FragmentStoreService } from './fragment-store.service';

describe('Service: FragmentStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FragmentStoreService]
    });
  });

  it('should ...', inject([FragmentStoreService], (service: FragmentStoreService) => {
    expect(service).toBeTruthy();
  }));
});
