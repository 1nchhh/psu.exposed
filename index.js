const axios = require('axios')
const proxy = require('./proxies.js')
const HttpsProxyAgent = require("https-proxy-agent")
let i = 0
setInterval(() => {
const httpsAgent = new HttpsProxyAgent(proxy())
axios.create({ httpsAgent }).request({
    url: 'https://psu.exposed/obfuscate',
    method: 'POST',
    body: JSON.stringify({
      script: 'print("a")\n'.repeat(1000), key: 'a', options: {
        DisableSuperOperators: true,
        MaximumSecurityEnabled: true,
        EncryptAllStrings: true,
        DisableAllMacros: true,
        EnhancedOutput: true,
        PremiumFormat: true,
        ByteCodeMode: 'Default'
      }
    })
  }).then(d => d.text()).then(d => {
    console.log('izi', d, i++)
  })
}, 1000)