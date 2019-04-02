import {ProductTrackerModule} from './product-tracker.module';

describe('ProductTrackerModule', () => {
    let productTrackerModule: ProductTrackerModule;

    beforeEach(() => {
        productTrackerModule = new ProductTrackerModule();
    });

    it('should create an instance', () => {
        expect(productTrackerModule).toBeTruthy();
    });
});
