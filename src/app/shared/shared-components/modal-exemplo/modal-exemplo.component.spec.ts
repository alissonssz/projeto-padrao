import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExemploComponent } from './modal-exemplo.component';

describe('ModalExemploComponent', () => {
  let component: ModalExemploComponent;
  let fixture: ComponentFixture<ModalExemploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalExemploComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalExemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
