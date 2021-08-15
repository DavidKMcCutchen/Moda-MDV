import { TestBed } from '@angular/core/testing';

import { ModafinilService } from './modafinil.service';

describe('ModafinilService', () => {
  let service: ModafinilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModafinilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
