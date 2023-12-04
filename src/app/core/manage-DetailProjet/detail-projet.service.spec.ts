import { TestBed } from '@angular/core/testing';

import { DetailProjetService } from './detail-projet.service';

describe('DetailProjetService', () => {
  let service: DetailProjetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailProjetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
