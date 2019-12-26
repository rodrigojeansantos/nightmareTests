module.exports = {
    // '@disabled': true,

	'email não informado': (browser) => {
			let login = browser.page.login()

			login
			.with('','naoInformeiEMail')
			.expectAlertInfo('Opps. Cadê o email?')  
	}   
	
}