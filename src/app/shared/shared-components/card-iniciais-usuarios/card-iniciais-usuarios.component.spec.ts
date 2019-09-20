import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIniciaisUsuariosComponent } from './card-iniciais-usuarios.component';

describe('CardIniciaisUsuariosComponent', () => {
  let component: CardIniciaisUsuariosComponent;
  let fixture: ComponentFixture<CardIniciaisUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardIniciaisUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardIniciaisUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
