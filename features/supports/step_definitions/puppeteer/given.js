const { Given } = require('cucumber')
const { URL_BASE } = process.env

Given('the screen size is {int}x{int}', async function(width, height) {
  return await this.page.setViewport({ width, height })
})

Given('the page URL is {string}', async function(dir) {
  return await this.page.goto(`${URL_BASE}${dir}`)
})
