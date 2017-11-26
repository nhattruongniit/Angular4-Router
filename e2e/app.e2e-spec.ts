import { DemoRouterMenuPage } from './app.po';

describe('demo-router-menu App', () => {
  let page: DemoRouterMenuPage;

  beforeEach(() => {
    page = new DemoRouterMenuPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
