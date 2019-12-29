
// import pg from '../../lib/db'

let movieData = {}

module.exports = {

  before: function(browser){

    let random = Math.floor(Math.random() * 1000)

    movieData = {
      title: `Resident Evil ${random}`,
      status: 'Disponível',
      year: 2002,
      releaseDate: '01/05/2002',
      cast: ["Milla Jovovich","Ali Larter","Ian Glen","Shawn Roberts"],
      cover: 'resident-evil-2002.jpg',
      plot: 'A missão do esquadrão e da Alice é desligar a rainha vermelha'
    }

    //Apagando dados
    // pg.removeByTitle(movieData.title)
    

    let login = browser.page.login()
    let sideBar = browser.page.sidebar()

    login.with('zombi@dospalmares.com.br', 'pwd123')
    sideBar.expectLoggedUser('Quilombo')

  },

  'dado que eu tenho um novo filme': function(browser){
  },
  'quando eu faço o cadastro do filme': function(browser){
    // console.log(movieData)
    let movie = browser.page.movie()

    movie
      .createForm()
      .setValue('@titleInput', movieData.title)
      .selectStatus(movieData.status)
      .setValue('@yearInput', movieData.year)
      .setValue('@dateInput', movieData.releaseDate)
      .insertCast(movieData.cast)
      .setValue('@plotInput', movieData.plot)
      .upLoadCover(movieData.cover)      
      .click('@createButton')
      // .pause(2000)
  },

  'então devo ve o filme na lista': function(browser){
    
    let movie = browser.page.movie()
    movie
      .waitForElementPresent('@list', 4000)
      .assert.containsText('@list', movieData.title)
  }

}