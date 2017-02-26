import { Portfolio2017Page } from './app.po';

describe('portfolio2017 App', () => {
  let page: Portfolio2017Page;

  beforeEach(() => {
    page = new Portfolio2017Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
