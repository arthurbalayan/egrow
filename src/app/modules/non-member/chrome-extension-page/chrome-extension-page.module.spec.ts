import {ChromeExtensionPageModule} from './chrome-extension-page.module';

describe('ChromeExtensionPageModule', () => {
  let chromeExtensionPageModule: ChromeExtensionPageModule;

  beforeEach(() => {
    chromeExtensionPageModule = new ChromeExtensionPageModule();
  });

  it('should create an instance', () => {
    expect(chromeExtensionPageModule).toBeTruthy();
  });
});
