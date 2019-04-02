import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NonMemberPageHeadComponent} from './non-member-page-head.component';

describe('NonMemberPageHeadComponent', () => {
  let component: NonMemberPageHeadComponent;
  let fixture: ComponentFixture<NonMemberPageHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonMemberPageHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonMemberPageHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
