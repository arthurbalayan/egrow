import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddProjectSummaryComponent} from './add-project-summary.component';

describe('AddProjectSummaryComponent', () => {
  let component: AddProjectSummaryComponent;
  let fixture: ComponentFixture<AddProjectSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjectSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
