const { setWorldConstructor } = require('cucumber')
const puppeteer = require('puppeteer')

class PuppeteerWorld {
  constructor() {
    this.start()
  }

  async start(headless = true) {
    const browser = await puppeteer.launch({ headless })
    const page = await browser.newPage()
    this.browser = browser
    this.page = page
    return page
  }

  async finish() {
    return await this.browser.close()
  }
}

setWorldConstructor(PuppeteerWorld)
