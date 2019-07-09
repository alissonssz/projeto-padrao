import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioInputControlComponent } from './radio-input-control.component';

describe('RadioInputControlComponent', () => {
  let component: RadioInputControlComponent;
  let fixture: ComponentFixture<RadioInputControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioInputControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioInputControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
