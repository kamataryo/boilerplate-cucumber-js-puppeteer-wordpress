const { Then } = require('cucumber')
const { expect } = require('chai')

Then('I should see {string}', async function(arg) {
  const elementExists = await this.hasElement(arg)
  const wordExists = await this.hasText(arg)
  expect(elementExists || wordExists).to.be.true
})

Then('take a screenshot and save it to {string}', async function(path) {
  return await this.page.screenshot({ path })
})
