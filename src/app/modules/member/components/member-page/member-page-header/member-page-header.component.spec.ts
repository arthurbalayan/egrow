import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MemberPageHeaderComponent} from './member-page-header.component';

describe('MemberPageHeaderComponent', () => {
  let component: MemberPageHeaderComponent;
  let fixture: ComponentFixture<MemberPageHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberPageHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
