const { When } = require('cucumber')

When('I go to {string}', async function(dir) {
  return await this.page.goto(`${URL_BASE}${dir}`)
})

When('I change the screen size into {int}x{int}', async function(
  width,
  height
) {
  return await this.page.setViewport({ width, height })
})

When('I type {string}', async function(text) {
  return await this.page.keyboard.type(text)
})

When('I press Enter', async function() {
  return await this.page.keyboard.type(String.fromCharCode(13))
})

When('I scroll by {int}px virtically', async function(dy) {
  return await this.page.evaluate(dy => {
    window.scrollBy(dy, 0)
  }, dy)
})

When('I scroll by {int}px horizontally', async function(dx) {
  return await this.page.evaluate(dx => {
    window.scrollBy(dx, 0)
  }, dx)
})

When('I wait for {int} seconds', function(sec) {
  return new Promise(resolve => setTimeout(resolve, sec * 1000))
})
