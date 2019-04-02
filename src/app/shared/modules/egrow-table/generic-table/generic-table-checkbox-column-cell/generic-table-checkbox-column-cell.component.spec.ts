import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GenericTableCheckboxColumnCellComponent} from './generic-table-checkbox-column-cell.component';

describe('GenericTableCheckboxColumnCellComponent', () => {
  let component: GenericTableCheckboxColumnCellComponent;
  let fixture: ComponentFixture<GenericTableCheckboxColumnCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericTableCheckboxColumnCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericTableCheckboxColumnCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
