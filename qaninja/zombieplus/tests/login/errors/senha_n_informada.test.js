module.exports = {
    // '@disabled': true,

  'senha não informado': (browser) => {
      let login = browser.page.login()

      login
      .with('zombi@dospalmares.com.br','')        
      .expectAlertInfo('Opps. Cadê a senha?')      
      .end()
  },   
  
}
