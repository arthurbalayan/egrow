import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MemberPageComponent} from './member-page.component';
import {MemberModule} from '../../member.module';

describe('MemberPageComponent', () => {
  let component: MemberPageComponent;
  let fixture: ComponentFixture<MemberPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MemberModule ],
      declarations: [ MemberPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
