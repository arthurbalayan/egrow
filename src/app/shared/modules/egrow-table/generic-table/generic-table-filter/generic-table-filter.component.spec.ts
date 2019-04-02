import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GenericTableFilterComponent} from './generic-table-filter.component';

describe('GenericTableFilterComponent', () => {
  let component: GenericTableFilterComponent;
  let fixture: ComponentFixture<GenericTableFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericTableFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericTableFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
