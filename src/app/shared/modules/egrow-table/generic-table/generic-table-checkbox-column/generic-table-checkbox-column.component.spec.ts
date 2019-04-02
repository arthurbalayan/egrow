import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GenericTableCheckboxColumnComponent} from './generic-table-checkbox-column.component';

describe('GenericTableCheckboxColumnComponent', () => {
  let component: GenericTableCheckboxColumnComponent;
  let fixture: ComponentFixture<GenericTableCheckboxColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericTableCheckboxColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericTableCheckboxColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
