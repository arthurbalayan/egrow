import {KeywordNicheToolPageModule} from './keyword-niche-tool-page.module';

describe('KeywordNicheToolPageModule', () => {
  let keywordNicheToolPageModule: KeywordNicheToolPageModule;

  beforeEach(() => {
    keywordNicheToolPageModule = new KeywordNicheToolPageModule();
  });

  it('should create an instance', () => {
    expect(keywordNicheToolPageModule).toBeTruthy();
  });
});
