import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizaPostComponent } from './atualiza-post.component';

describe('AtualizaPostComponent', () => {
  let component: AtualizaPostComponent;
  let fixture: ComponentFixture<AtualizaPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtualizaPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizaPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
