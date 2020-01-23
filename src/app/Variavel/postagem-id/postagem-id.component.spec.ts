import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostagemIdComponent } from './postagem-id.component';

describe('PostagemIdComponent', () => {
  let component: PostagemIdComponent;
  let fixture: ComponentFixture<PostagemIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostagemIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostagemIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
