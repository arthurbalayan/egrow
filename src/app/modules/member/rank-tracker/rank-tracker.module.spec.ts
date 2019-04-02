import {RankTrackerModule} from './rank-tracker.module';

describe('RankTrackerModule', () => {
    let rankTrackerModule: RankTrackerModule;

    beforeEach(() => {
        rankTrackerModule = new RankTrackerModule();
    });

    it('should create an instance', () => {
        expect(rankTrackerModule).toBeTruthy();
    });
});
