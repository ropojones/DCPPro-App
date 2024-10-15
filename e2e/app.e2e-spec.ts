import { DcpproTemplatePage } from './app.po';

describe('Dcppro App', function() {
  let page: DcpproTemplatePage;

  beforeEach(() => {
    page = new DcpproTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
