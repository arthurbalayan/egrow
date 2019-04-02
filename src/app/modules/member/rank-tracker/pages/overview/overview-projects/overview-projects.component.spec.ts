import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OverviewProjectsComponent} from './overview-projects.component';

describe('OverviewProjectsComponent', () => {
  let component: OverviewProjectsComponent;
  let fixture: ComponentFixture<OverviewProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
