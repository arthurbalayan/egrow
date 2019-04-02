import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AsinInputComponent} from './asin-input.component';

describe('AsinInputComponent', () => {
  let component: AsinInputComponent;
  let fixture: ComponentFixture<AsinInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsinInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsinInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
