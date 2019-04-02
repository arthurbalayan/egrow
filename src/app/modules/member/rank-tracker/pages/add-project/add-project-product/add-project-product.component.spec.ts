import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddProjectProductComponent} from './add-project-product.component';

describe('AddProjectProductComponent', () => {
  let component: AddProjectProductComponent;
  let fixture: ComponentFixture<AddProjectProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjectProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
