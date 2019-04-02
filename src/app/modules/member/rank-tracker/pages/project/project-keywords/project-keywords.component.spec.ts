import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjectKeywordsComponent} from './project-keywords.component';

describe('ProjectKeywordsComponent', () => {
  let component: ProjectKeywordsComponent;
  let fixture: ComponentFixture<ProjectKeywordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectKeywordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectKeywordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
