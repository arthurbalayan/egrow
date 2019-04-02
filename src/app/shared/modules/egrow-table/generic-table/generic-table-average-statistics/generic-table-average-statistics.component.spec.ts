import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericTableAverageStatisticsComponent } from './generic-table-average-statistics.component';

describe('GenericTableAverageStatisticsComponent', () => {
  let component: GenericTableAverageStatisticsComponent;
  let fixture: ComponentFixture<GenericTableAverageStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericTableAverageStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericTableAverageStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
