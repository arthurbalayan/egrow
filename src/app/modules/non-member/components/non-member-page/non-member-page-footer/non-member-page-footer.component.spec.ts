import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NonMemberPageFooterComponent} from './non-member-page-footer.component';

describe('NonMemberPageFooterComponent', () => {
  let component: NonMemberPageFooterComponent;
  let fixture: ComponentFixture<NonMemberPageFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonMemberPageFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonMemberPageFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
