import {NonMemberModule} from './non-member.module';

describe('NonMemberModule', () => {
  let nonMemberModule: NonMemberModule;

  beforeEach(() => {
    nonMemberModule = new NonMemberModule();
  });

  it('should create an instance', () => {
    expect(nonMemberModule).toBeTruthy();
  });
});
