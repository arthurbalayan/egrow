import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {KeywordNicheToolComponent} from './keyword-niche-tool.component';

describe('KeywordNicheToolComponent', () => {
    let component: KeywordNicheToolComponent;
    let fixture: ComponentFixture<KeywordNicheToolComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [KeywordNicheToolComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(KeywordNicheToolComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
