import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MemberPageFooterComponent} from './member-page-footer.component';

describe('MemberPageFooterComponent', () => {
  let component: MemberPageFooterComponent;
  let fixture: ComponentFixture<MemberPageFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberPageFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberPageFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
