const { Before } = require('cucumber')

const { HEADLESS_MODE = 'false' } = process.env

Before(async function() {
  return await this.start(HEADLESS_MODE.toUpperCase() === 'TRUE')
})
