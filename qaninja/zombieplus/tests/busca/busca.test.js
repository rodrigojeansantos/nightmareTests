let movieData = {}

module.exports = {

  before: function(browser){
    movieData = {
      title: `Resident Evil 87`,
      status: 'Disponível',
      year: 2013,
      releaseDate: '01/05/2002',
      cast: ["Milla Jovovich","Ali Larter","Ian Glen","Shawn Roberts"],
      cover: 'resident-evil-2002.jpg',
      plot: 'A missão do esquadrão e da Alice é desligar a rainha vermelha'
    }

    let login = browser.page.login()
    let sideBar = browser.page.sidebar()

    login.with('zombi@dospalmares.com.br', 'pwd123')
    sideBar.expectLoggedUser('Quilombo')

  },

  'quando eu faço a busca pelo titulo': function(browser){
    let movie = browser.page.movie()
    
    movie
      .setValue('@searchInput',movieData.title)
      .click('@searchIcon')
      .pause(10000)

  },

  'então o titulo buscado deve ser exibido na lista': function(browser){
    let movie = browser.page.movie()

    movie
      .waitForElementPresent('@tr', 5000)
      .expect.elements('@tr').count.to.equal(1)
    
    movie  
      .assert.containsText('@tr', movieData.title)
  }
}