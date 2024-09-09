import { TestBed } from '@angular/core/testing';

import { StargazerService } from './stargazer.service';

describe('StargazerService', () => {
  let service: StargazerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StargazerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
