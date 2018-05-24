const { browserStackErrorReporter } = requireHelper('browserstack-error-reporter');
const utils = requireHelper('e2e-utils');
const config = requireHelper('e2e-config');
requireHelper('rejection');
const axePageObjects = requireHelper('axe-page-objects');

jasmine.getEnv().addReporter(browserStackErrorReporter);

const clickTabTest = async (index, tabName) => {
  const tabElTrigger = await element.all(by.className('tab')).get(index);
  await tabElTrigger.click();
  await browser.driver
    .wait(protractor.ExpectedConditions.presenceOf(element(by.css(`#${tabName}.is-visible`))), config.waitsFor);

  expect(await element(by.id(tabName)).getAttribute('class')).toContain('can-show');
  expect(await element.all(by.className('tab')).get(index).getAttribute('class')).toContain('is-selected');
};

describe('Tabs click example-index tests', () => {
  beforeEach(async () => {
    await utils.setPage('/components/tabs/example-index');
    const tabsEl = await element(by.id('tabs-normal'));
    await browser.driver
      .wait(protractor.ExpectedConditions.presenceOf(tabsEl), config.waitsFor);
  });

  if (!utils.isIE()) {
    xit('Should be accessible on init with no WCAG 2AA violations on example-index', async () => {
      const res = await axePageObjects(browser.params.theme);

      expect(res.violations.length).toEqual(0);
    });
  }

  it('Should open 5th tab, on click', async () => {
    await clickTabTest('4', 'tabs-normal-notes');
  });

  it('Should open 5th tab, 3rd, then 2nd tab, on click screen width of 500px', async () => {
    const windowSize = await browser.driver.manage().window().getSize();
    await browser.driver.manage().window().setSize(500, 600);
    await browser.driver.sleep(config.sleep);
    await browser.driver
      .wait(protractor.ExpectedConditions.presenceOf(element(by.id('tabs-normal'))), config.waitsFor);
    await clickTabTest('4', 'tabs-normal-notes');
    await clickTabTest('2', 'tabs-normal-attachments');
    await clickTabTest('1', 'tabs-normal-opportunities');
    await browser.driver.manage().window().setSize(windowSize.width, windowSize.height);
  });

  it('Should open 5th tab, open menu tab-popupmenu, and list correct tab on screen width of 500px', async () => {
    const windowSize = await browser.driver.manage().window().getSize();
    await browser.driver.manage().window().setSize(500, 600);
    await browser.driver.sleep(config.sleep);
    await browser.driver
      .wait(protractor.ExpectedConditions.presenceOf(element(by.id('tabs-normal'))), config.waitsFor);
    await clickTabTest('4', 'tabs-normal-notes');
    await element(by.css('.tab-more .icon-more')).click();
    await browser.driver
      .wait(protractor.ExpectedConditions.presenceOf(element(by.css('#tab-container-popupmenu.is-open'))), config.waitsFor);

    expect(await element.all(by.css('#tab-container-popupmenu li')).get(4).getAttribute('class')).toContain('is-checked');
    await browser.driver.manage().window().setSize(windowSize.width, windowSize.height);
  });

  it('Should open 5th tab, and select 1st tab on tab-popupmenu on screen width of 500px', async () => {
    const windowSize = await browser.driver.manage().window().getSize();
    await browser.driver.manage().window().setSize(500, 600);
    await browser.driver.sleep(config.sleep);
    await browser.driver
      .wait(protractor.ExpectedConditions.presenceOf(element(by.id('tabs-normal'))), config.waitsFor);
    await clickTabTest('4', 'tabs-normal-notes');
    await browser.driver
      .wait(protractor.ExpectedConditions.presenceOf(element(by.className('is-focused')), config.waitsFor));
    await element(by.className('tab-more')).click();
    await browser.driver
      .wait(protractor.ExpectedConditions.visibilityOf(element(by.css('.tab-more.is-open'))), config.waitsFor);

    expect(await element.all(by.css('#tab-container-popupmenu li')).get(4).getAttribute('class')).toContain('is-checked');
    await element.all(by.css('#tab-container-popupmenu li')).get(1).click();

    expect(await element(by.css('.tab-list .is-selected')).getText()).toContain('Opportunities');
    await browser.driver.manage().window().setSize(windowSize.width, windowSize.height);
  });

  it('Should open 5th, 3rd, then 2nd tab, on click', async () => {
    await clickTabTest('4', 'tabs-normal-notes');
    await clickTabTest('2', 'tabs-normal-attachments');
    await clickTabTest('1', 'tabs-normal-opportunities');
  });
});

describe('Tabs keyboard example-index tests', () => {
  beforeEach(async () => {
    await utils.setPage('/components/tabs/example-index');
    const tabsEl = await element(by.id('tabs-normal'));
    await browser.driver
      .wait(protractor.ExpectedConditions.presenceOf(tabsEl), config.waitsFor);
    const tabElTriggerStart = await element(by.id('header-searchfield'));
    await tabElTriggerStart.click();
    await element(by.css('body')).sendKeys(protractor.Key.TAB);
    await browser.driver
      .wait(protractor.ExpectedConditions.presenceOf(element(by.className('is-focused')), config.waitsFor));
  });

  if (utils.isChrome()) {
    it('Should open 5th tab, on arrow right', async () => {
      await browser.driver.actions().sendKeys(protractor.Key.ARROW_RIGHT).perform();
      await browser.driver
        .wait(protractor.ExpectedConditions.presenceOf(element(by.className('is-focused')), config.waitsFor));
      await browser.driver.actions().sendKeys(protractor.Key.ARROW_RIGHT).perform();
      await browser.driver
        .wait(protractor.ExpectedConditions.presenceOf(element(by.className('is-focused')), config.waitsFor));
      await browser.driver.actions().sendKeys(protractor.Key.ENTER).perform();
      await browser.driver
        .wait(protractor.ExpectedConditions.visibilityOf(element(by.css('#tabs-normal-notes.is-visible'))), config.waitsFor);

      expect(await element(by.id('tabs-normal-notes')).getAttribute('class')).toContain('can-show');
      expect(await element.all(by.className('tab')).get(4).getAttribute('class')).toContain('is-selected');
    });

    it('Should open 5th tab, on arrow down', async () => {
      await browser.driver.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
      await browser.driver
        .wait(protractor.ExpectedConditions.presenceOf(element(by.className('is-focused')), config.waitsFor));
      await browser.driver.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
      await browser.driver
        .wait(protractor.ExpectedConditions.presenceOf(element(by.className('is-focused')), config.waitsFor));
      await browser.driver.actions().sendKeys(protractor.Key.ENTER).perform();
      await browser.driver
        .wait(protractor.ExpectedConditions.visibilityOf(element(by.css('#tabs-normal-notes.is-visible'))), config.waitsFor);

      expect(await element(by.id('tabs-normal-notes')).getAttribute('class')).toContain('can-show');
      expect(await element.all(by.className('tab')).get(4).getAttribute('class')).toContain('is-selected');
    });

    it('Should open 1st tab, on arrow up', async () => {
      await browser.driver.actions().sendKeys(protractor.Key.ARROW_UP).perform();
      await browser.driver
        .wait(protractor.ExpectedConditions.presenceOf(element(by.className('is-focused')), config.waitsFor));
      await browser.driver.actions().sendKeys(protractor.Key.ARROW_UP).perform();
      await browser.driver
        .wait(protractor.ExpectedConditions.presenceOf(element(by.className('is-focused')), config.waitsFor));
      await browser.driver.actions().sendKeys(protractor.Key.ENTER).perform();
      await browser.driver
        .wait(protractor.ExpectedConditions.visibilityOf(element(by.css('#tabs-normal-contracts.is-visible'))), config.waitsFor);

      expect(await element(by.id('tabs-normal-contracts')).getAttribute('class')).toContain('can-show');
      expect(await element.all(by.className('tab')).get(0).getAttribute('class')).toContain('is-selected');
    });

    it('Should open 1st tab, on arrow left', async () => {
      await browser.driver.actions().sendKeys(protractor.Key.ARROW_LEFT).perform();
      await browser.driver
        .wait(protractor.ExpectedConditions.presenceOf(element(by.className('is-focused')), config.waitsFor));
      await browser.driver.actions().sendKeys(protractor.Key.ARROW_LEFT).perform();
      await browser.driver
        .wait(protractor.ExpectedConditions.presenceOf(element(by.className('is-focused')), config.waitsFor));
      await browser.driver.actions().sendKeys(protractor.Key.ENTER).perform();
      await browser.driver
        .wait(protractor.ExpectedConditions.visibilityOf(element(by.css('#tabs-normal-contracts.is-visible'))), config.waitsFor);

      expect(await element(by.id('tabs-normal-contracts')).getAttribute('class')).toContain('can-show');
      expect(await element.all(by.className('tab')).get(0).getAttribute('class')).toContain('is-selected');
    });

    it('Should arrow to 1st tab, open menu tab-popupmenu, and list correct tab on screen width of 500px', async () => {
      const windowSize = await browser.driver.manage().window().getSize();
      await browser.driver.manage().window().setSize(500, 600);
      await browser.driver
        .wait(protractor.ExpectedConditions.presenceOf(element(by.className('is-focused')), config.waitsFor));
      await browser.driver.actions().sendKeys(protractor.Key.ARROW_LEFT).perform();
      await browser.driver
        .wait(protractor.ExpectedConditions.presenceOf(element(by.className('is-focused')), config.waitsFor));
      await browser.driver.actions().sendKeys(protractor.Key.ARROW_LEFT).perform();
      await browser.driver
        .wait(protractor.ExpectedConditions.presenceOf(element(by.className('is-focused')), config.waitsFor));
      await browser.driver.actions().sendKeys(protractor.Key.ENTER).perform();
      await browser.driver
        .wait(protractor.ExpectedConditions.visibilityOf(element(by.css('#tabs-normal-contracts.is-visible'))), config.waitsFor);
      await browser.driver.sleep(config.sleep);
      await browser.driver.actions().sendKeys(protractor.Key.ARROW_LEFT).perform();
      await browser.driver
        .wait(protractor.ExpectedConditions.presenceOf(element(by.css('#tab-container-popupmenu'))), config.waitsFor);

      expect(await element.all(by.css('#tab-container-popupmenu li')).get(0).getAttribute('class')).toContain('is-checked');
      await browser.driver.manage().window().setSize(windowSize.width, windowSize.height);
    });
  }
});
