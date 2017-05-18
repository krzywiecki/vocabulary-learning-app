import { GeeksLingoPage } from './app.po';

describe('geeks-lingo App', () => {
  let page: GeeksLingoPage;

  beforeEach(() => {
    page = new GeeksLingoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
