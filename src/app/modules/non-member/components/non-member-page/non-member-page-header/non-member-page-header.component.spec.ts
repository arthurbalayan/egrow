import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NonMemberPageHeaderComponent} from './non-member-page-header.component';

describe('NonMemberPageHeaderComponent', () => {
  let component: NonMemberPageHeaderComponent;
  let fixture: ComponentFixture<NonMemberPageHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonMemberPageHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonMemberPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
