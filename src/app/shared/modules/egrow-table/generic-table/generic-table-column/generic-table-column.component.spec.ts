import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GenericTableColumnComponent} from './generic-table-column.component';

describe('GenericTableColumnComponent', () => {
  let component: GenericTableColumnComponent;
  let fixture: ComponentFixture<GenericTableColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericTableColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericTableColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
