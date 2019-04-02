import {KeywordTrackerModule} from './keyword-tracker.module';

describe('KeywordTrackerModule', () => {
    let keywordTrackerModule: KeywordTrackerModule;

    beforeEach(() => {
        keywordTrackerModule = new KeywordTrackerModule();
    });

    it('should create an instance', () => {
        expect(keywordTrackerModule).toBeTruthy();
    });
});
