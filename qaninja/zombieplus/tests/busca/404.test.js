module.exports = {
  '@tags': ['smoke','404'],

  before: function(browser){


    let login = browser.page.login()
    let sideBar = browser.page.sidebar()

    login.with('zombi@dospalmares.com.br', 'pwd123')
    sideBar.expectLoggedUser('Quilombo')

  },

  'quando eu busco um titulo não cadastrado': function(browser){
    let movie = browser.page.movie()
    
    movie
      .setValue('@searchInput','Batman. Cavaleiro das trevas')
      .click('@searchIcon')
      // .pause(10000)    
  },

  'então devo ver uma mensagem de alerta': function(browser){
    let movie = browser.page.movie()

    movie
      .waitForElementVisible('@alertDanger', 6000)
      .assert.containsText('@alertDanger','Puxa! não encontramos nada aqui :(')
  }
}