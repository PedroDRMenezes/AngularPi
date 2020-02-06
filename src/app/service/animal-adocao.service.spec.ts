import { TestBed } from '@angular/core/testing';

import { AnimalAdocaoService } from './animal-adocao.service';

describe('AnimalAdocaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnimalAdocaoService = TestBed.get(AnimalAdocaoService);
    expect(service).toBeTruthy();
  });
});
