import { TestBed } from '@angular/core/testing';

import { PublicacoesService } from './publicacoes.service';

describe('PublicacoesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PublicacoesService = TestBed.get(PublicacoesService);
    expect(service).toBeTruthy();
  });
});
