
var userAction = {
  expectLoggedUser: function(name){
    return this
    .waitForElementVisible('@userInfo', 3000)
    .assert.containsText('@userInfo', name)
  }
}

module.exports = {
  
  commands: [ userAction, ],
    elements: {
      userInfo: '.user .info span',
    }
  }