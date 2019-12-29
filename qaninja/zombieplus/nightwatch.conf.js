require('babel-core/register')

const chromerdriver = require('chromedriver')
require('geckodriver') // não tem acesso ao path

const testUrl = 'http://zombie-web:5000'
const defaultTimeout = 15000

module.exports = {

  src_folders: ['tests'],
  // src_folders: ['tests/busca'],

  page_objects_path: './pages',
  globals_path: './hooks/globals.js',

  // Até onde estudei webdriver é um só para os navegadores
  webdriver: {
    start_process: true
  },

  test_workers:{ enabled: true, workers: 2 }, //só o chrome que funciona mais de uma instancia

  screenshots: {
    enabled: true,
    on_failure: true,
    on_error: true,
    path: 'tests_output/'
  },

  test_settings: {
    
    default: {
      launch_url: testUrl,
      globals: {
        waitForConditionTimeout: defaultTimeout // as vezes a conexão com a internet/rede fica lenta
      },
      webdriver: {        
        server_path: chromerdriver.path,
        port: 9515
      },            
      desiredCapabilities: {
        browserName : 'chrome'
      },  
    },

    stage: {
      launch_url: 'http://stage.zombie-web:5000',
    },

    headless:{
      launch_url: testUrl,
      globals: {
        waitForConditionTimeout: defaultTimeout // as vezes a conexão com a internet/rede fica lenta
      },
      webdriver: {        
        server_path: chromerdriver.path,
        port: 9515
      },            
      desiredCapabilities: {
        browserName : 'chrome',
        chromeOptions: {
          w3c: false,
          args: ['--headless', '--no-sandbox']
        }
      },  
    },

    firefox:{
      launch_url: testUrl,
      globals: {
        waitForConditionTimeout: defaultTimeout // as vezes a conexão com a internet/rede fica lenta
      },
      webdriver: {        
        // server_path: './node_modules/.bin/geckodriver',  linux ou mac
        server_path: '.\\node_modules\\.bin\\geckodriver.cmd',
        port: 4444
      },            
      desiredCapabilities: {
        browserName : 'firefox',
        acceptInsecureCerts: true
      },        
    }
  }
}