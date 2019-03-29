import PuppeteerWorld from './puppeteer-world'

export default class WordPressWorld extends PuppeteerWorld {
  constructor(...arg) {
    super(...arg)
    const { URL_BASE, WORDPRESS_USER_LOGIN, WORDPRESS_USER_PASS } = process.env
    this.urlBase = URL_BASE
    this.credentials = {
      username: WORDPRESS_USER_LOGIN,
      password: WORDPRESS_USER_LOGIN
    }
  }

  async login(options = {}) {
    const {
      loginURL = `${this.urlBase}/wp-admin`,
      wpLoginUserFormElementSelector = '#user_login',
      wpPasswordFormElementSelector = '#user_pass',
      wpSubmitButtonSelector = '#wp-submit',
      username = this.credentials.username,
      password = this.credentials.password
    } = options

    await this.page.goto(loginURL)
    await this.page.type(wpLoginUserFormElementSelector, username)
    await this.page.type(wpPasswordFormElementSelector, password)
    await this.page.click(wpSubmitButtonSelector)
    return await this.page.waitForNavigation({
      timeout: 60000,
      waitUntil: 'domcontentloaded'
    })
  }
}
