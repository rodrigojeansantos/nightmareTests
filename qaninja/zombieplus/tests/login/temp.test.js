module.exports = {
    '@disabled': true,
    before: (browser) => {
        console.log('antes de todos os steps.')   
    },

    after: (browser) => {
        console.log('depois de todos os steps.')   
    },

    beforeEach: (browser) => {
        console.log('antes de todos os steps.')   
    },

    afterEach: (browser) => {
        console.log('apos de todos os steps.')   
    },

    before: (browser) => {
        console.log('antes de todos os steps.')   
    },    


    'step one': (browser) => {
        browser
        .resizeWindow(1680, 1050)
        .url('http://zombie-web:5000/login')
        .waitForElementVisible('.card-login', 3000)
    },

    'step two': (browser) => {
        browser
        .resizeWindow(1680, 1050)
        .url('http://zombie-web:5000/login')
        .waitForElementVisible('.card-login', 3000)        
    }

}