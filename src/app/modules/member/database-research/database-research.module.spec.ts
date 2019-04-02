import {DatabaseResearchModule} from './database-research.module';

describe('DatabaseResearchModule', () => {
    let databaseResearchModule: DatabaseResearchModule;

    beforeEach(() => {
        databaseResearchModule = new DatabaseResearchModule();
    });

    it('should create an instance', () => {
        expect(databaseResearchModule).toBeTruthy();
    });
});
