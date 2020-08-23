/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IAmService } from './i-am.service';

describe('Service: IAm', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IAmService]
    });
  });

  it('should ...', inject([IAmService], (service: IAmService) => {
    expect(service).toBeTruthy();
  }));
});
