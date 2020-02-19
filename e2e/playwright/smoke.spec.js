const playwright = require("playwright");
const chai = require("chai");
const expect = chai.expect;

let page, browser;

describe("Smoke tests", () => {
  beforeEach(async () => {
    browser = await playwright["chromium"].launch({ headless: true });
    page = await browser.newPage();
    await page.goto("http://secret.nginx.local/");
  });

  afterEach(async () => {
    await browser.close();
  });

  it("Works", async () => {
    const sel = "h1";
    await page.waitForSelector(sel);

    expect(await page.$eval(sel, node => node.innerText)).to.be.equal(
      "Welcome to nginx demo page!"
    );
  });
});
