import { MapaFemicidiosPage } from './app.po';

describe('mapa-femicidios App', () => {
  let page: MapaFemicidiosPage;

  beforeEach(() => {
    page = new MapaFemicidiosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
