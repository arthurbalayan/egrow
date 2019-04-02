import {SavedSearchesModule} from './saved-searches.module';

describe('SavedSearchesModule', () => {
    let savedSearchesModule: SavedSearchesModule;

    beforeEach(() => {
        savedSearchesModule = new SavedSearchesModule();
    });

    it('should create an instance', () => {
        expect(savedSearchesModule).toBeTruthy();
    });
});
