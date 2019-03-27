const {
  Before,
  Given,
  When,
  Then,
  After,
  setDefaultTimeout
} = require('cucumber')
const { expect } = require('chai')

const {
  WORDPRESS_URL,
  WORDPRESS_USER_LOGIN,
  WORDPRESS_USER_PASS,
  HEADLESS_MODE = 'false'
} = process.env

setDefaultTimeout(60 * 1000)

// Asynchronous Callback
Before(async function() {
  return await this.start(HEADLESS_MODE.toUpperCase() === 'TRUE')
})

Given('the screen size is {int}x{int}', async function(width, height) {
  return await this.page.setViewport({ width, height })
})

const loginAt = async (page, dir) => {
  await page.goto(`${WORDPRESS_URL}${dir}`)
  await page.type('#user_login', WORDPRESS_USER_LOGIN)
  await page.type('#user_pass', WORDPRESS_USER_PASS)
  await page.click('#wp-submit')
  return await page.waitForNavigation({
    timeout: 60000,
    waitUntil: 'domcontentloaded'
  })
}

When('I login', function() {
  return loginAt(this.page, '/wp-admin/')
})

When('I login at {string}', function(dir) {
  return loginAt(this.page, dir)
})

When('I am on {string}', async function(dir) {
  return await this.page.goto(`${WORDPRESS_URL}${dir}`)
})

When('I focus title', async function() {
  return await this.page.focus('#post-title-0')
})

When('I add block {string}', async function(name) {
  await this.page.click('.editor-inserter__toggle')
  return await this.page.click(`.editor-block-list-item-${name}`)
})

When('I remove tips', async function() {
  this.page.evaluate(() => {}, '')
  return await this.page.keyboard.type(text)
})

When('I type {string}', async function(text) {
  return await this.page.keyboard.type(text)
})

When('I publis post from editor', async function() {
  await this.page.click('.editor-post-publish-panel__toggle')
  await this.page.click('.editor-post-publish-button')
})

When('I wait {int}', function(sec) {
  return new Promise(resolve => setTimeout(resolve, sec * 1000))
})

Then('take a screenshot and save it to {string}', async function(path) {
  return await this.page.screenshot({ path })
})

After(async function() {
  await this.finish()
})
