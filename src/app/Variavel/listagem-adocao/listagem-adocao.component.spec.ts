import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemAdocaoComponent } from './listagem-adocao.component';

describe('ListagemAdocaoComponent', () => {
  let component: ListagemAdocaoComponent;
  let fixture: ComponentFixture<ListagemAdocaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemAdocaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemAdocaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
