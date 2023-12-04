import { TestBed } from '@angular/core/testing';

import { BlocsService } from './blocs.service';

describe('BlocsService', () => {
  let service: BlocsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlocsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
