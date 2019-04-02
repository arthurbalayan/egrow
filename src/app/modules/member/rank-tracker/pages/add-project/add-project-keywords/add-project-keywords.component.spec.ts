import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddProjectKeywordsComponent} from './add-project-keywords.component';

describe('AddProjectKeywordsComponent', () => {
  let component: AddProjectKeywordsComponent;
  let fixture: ComponentFixture<AddProjectKeywordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjectKeywordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectKeywordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
