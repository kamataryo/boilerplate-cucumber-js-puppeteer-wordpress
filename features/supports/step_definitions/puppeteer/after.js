const { After } = require('cucumber')

After(async function() {
  return await this.finish()
})
