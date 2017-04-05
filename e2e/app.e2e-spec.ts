import { FundingPlatformPage } from './app.po';

describe('funding-platform App', function() {
  let page: FundingPlatformPage;

  beforeEach(() => {
    page = new FundingPlatformPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
