module.exports = {
  '@disabled': true,

    'senha incorreta': (browser) => {
        let login = browser.page.login()

        login
        .with('zombi@dospalmares.com.br','123abc') 
        .expectAlertDanger('Usuário e/ou senha inválidos')      
     },

     'não cadastrado': (browser) => {
        let login = browser.page.login()

        login        
        .with('404@yahoo.com','123abc')
        .expectAlertDanger('Usuário e/ou senha inválidos')
    },     

    'email não informado': (browser) => {
        let login = browser.page.login()

        login
        .with('','naoInformeiEMail')
        .expectAlertInfo('Opps. Cadê o email!')  
    },

    'senha não informado': (browser) => {
        let login = browser.page.login()

        login
        .with('zombi@dospalmares.com.br','')        
        .expectAlertInfo('Opps. Cadê a senha?')      
        .end()
    },   
    
   }