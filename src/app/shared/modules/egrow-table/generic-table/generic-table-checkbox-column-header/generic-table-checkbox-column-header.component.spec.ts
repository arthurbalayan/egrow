import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GenericTableCheckboxColumnHeaderComponent} from './generic-table-checkbox-column-header.component';

describe('GenericTableCheckboxColumnHeaderComponent', () => {
  let component: GenericTableCheckboxColumnHeaderComponent;
  let fixture: ComponentFixture<GenericTableCheckboxColumnHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericTableCheckboxColumnHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericTableCheckboxColumnHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
