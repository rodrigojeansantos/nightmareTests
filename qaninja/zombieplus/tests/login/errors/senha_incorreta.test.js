module.exports = {
// '@disabled': true,

  'senha incorreta': (browser) => {
      let login = browser.page.login()

      login
      .with('zombi@dospalmares.com.br','123abc') 
      .expectAlertDanger('Usuário e/ou senha inválidos')      
    },
  
  }