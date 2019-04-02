import {KeywordNicheToolModule} from './keyword-niche-tool.module';

describe('KeywordNicheToolModule', () => {
    let keywordNicheToolModule: KeywordNicheToolModule;

    beforeEach(() => {
        keywordNicheToolModule = new KeywordNicheToolModule();
    });

    it('should create an instance', () => {
        expect(keywordNicheToolModule).toBeTruthy();
    });
});
