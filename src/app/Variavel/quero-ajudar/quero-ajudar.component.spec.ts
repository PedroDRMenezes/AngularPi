import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueroAjudarComponent } from './quero-ajudar.component';

describe('QueroAjudarComponent', () => {
  let component: QueroAjudarComponent;
  let fixture: ComponentFixture<QueroAjudarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueroAjudarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueroAjudarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
