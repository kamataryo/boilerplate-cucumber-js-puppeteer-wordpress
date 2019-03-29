const { When } = require('cucumber')

When('I login', function() {
  return this.login()
})
