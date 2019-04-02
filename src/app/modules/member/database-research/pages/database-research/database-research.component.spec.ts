import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DatabaseResearchComponent} from './database-research.component';

describe('DatabaseResearchComponent', () => {
    let component: DatabaseResearchComponent;
    let fixture: ComponentFixture<DatabaseResearchComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DatabaseResearchComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DatabaseResearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
