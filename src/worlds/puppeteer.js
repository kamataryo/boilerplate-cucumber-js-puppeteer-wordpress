import puppeteer from 'puppeteer'

export default class PuppeteerWorld {
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

  async getElementXY(selector) {
    return await this.page.evaluate(selector => {
      const element = document.querySelector(selector)
      const { offsetTop, offsetLeft, offsetHeight, offsetWidth } = element
      return {
        top: offsetTop + offsetHeight / 2,
        left: offsetLeft + offsetWidth / 2
      }
    }, selector)
  }

  async hasElement(selector) {
    return await this.page.evaluate(selector => {
      const element = document.querySelector(selector)
      return !!element
    }, selector)
  }

  async hasText(text) {
    return await this.page.evaluate(text => {
      return document.body.innerHTML.indexOf(text) > 0
    }, text)
  }

  async finish() {
    return await this.browser.close()
  }
}
