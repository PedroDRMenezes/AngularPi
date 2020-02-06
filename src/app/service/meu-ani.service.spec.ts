import { TestBed } from '@angular/core/testing';

import { MeuAniService } from './meu-ani.service';

describe('MeuAniService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MeuAniService = TestBed.get(MeuAniService);
    expect(service).toBeTruthy();
  });
});
