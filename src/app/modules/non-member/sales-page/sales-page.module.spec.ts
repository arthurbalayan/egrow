import {SalesPageModule} from './sales-page.module';

describe('SalesPageModule', () => {
  let salesPageModule: SalesPageModule;

  beforeEach(() => {
    salesPageModule = new SalesPageModule();
  });

  it('should create an instance', () => {
    expect(salesPageModule).toBeTruthy();
  });
});
