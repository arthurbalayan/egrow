import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NonMemberPageComponent} from './non-member-page.component';

describe('NonMemberPageComponent', () => {
  let component: NonMemberPageComponent;
  let fixture: ComponentFixture<NonMemberPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonMemberPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonMemberPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
