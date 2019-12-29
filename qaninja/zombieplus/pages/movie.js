
var createActions = {
  createForm: function(){
    return this
    .click('@addButton')
    .waitForElementVisible('@movieForm', 3000)
  },

  selectStatus: function(status){
    return this
      // trocando o padrão usando o Xpath
      .click('@statusSelect')
      .useXpath()
      .waitForElementVisible(`//li//span[contains(text(), "${status}")]`, 2000)
      .click(`//li//span[contains(text(), "${status}")]`)
      // Agora volto para Css com o comando abaixo
      .useCss()    
  },

  insertCast: function(cast){
    const browser = this

      cast.forEach(function(actor){
        browser
          .setValue('@castInput', actor)
          .api.keys(browser.api.Keys.TAB)
      })
    return this
  },

  upLoadCover: function(fileName){
    let fullPath = require('path').resolve(__dirname, '../image/' + fileName)
    return this
      .setValue('@uploadInput', fullPath)
      .pause(1000)
      .assert.attributeContains('.picture-src', 'src', 'blob')

  }

}

module.exports = {
  commands: [createActions,],
  elements: {
    addButton: '.movie-add',
    searchInput: 'input[placeholder^=Pesquisar]',
    searchIcon:'#search-movie',
    alertDanger: '.alert-danger',
    movieForm: '#movie-form',
    titleInput: 'input[name=title]',
    statusSelect: 'input[placeholder=Status]',
    yearInput: 'input[name=year]',
    dateInput: 'input[name=release_date]',
    castInput: '.cast',
    plotInput: 'textArea[name=overview]',
    uploadInput: '#upcover',
    createButton: '#create-movie',
    list: 'table tbody',
    tr: 'table tbody tr'
  }
}