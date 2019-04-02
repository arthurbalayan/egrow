import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {KeywordTrackerComponent} from './keyword-tracker.component';

describe('KeywordTrackerComponent', () => {
    let component: KeywordTrackerComponent;
    let fixture: ComponentFixture<KeywordTrackerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [KeywordTrackerComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(KeywordTrackerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
