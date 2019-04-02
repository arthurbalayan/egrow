import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LiveAmazonScannerComponent} from './live-amazon-scanner.component';

describe('LiveAmazonScannerComponent', () => {
    let component: LiveAmazonScannerComponent;
    let fixture: ComponentFixture<LiveAmazonScannerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LiveAmazonScannerComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LiveAmazonScannerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
