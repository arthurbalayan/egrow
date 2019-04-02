import {LiveAmazonScannerModule} from './live-amazon-scanner.module';

describe('LiveAmazonScannerModule', () => {
    let liveAmazonScannerModule: LiveAmazonScannerModule;

    beforeEach(() => {
        liveAmazonScannerModule = new LiveAmazonScannerModule();
    });

    it('should create an instance', () => {
        expect(liveAmazonScannerModule).toBeTruthy();
    });
});
