

const Zabbix = require("./lib/Zabbix");
const Client = require('./lib/Client');
const fs = require('fs');

const api = new Zabbix({
    url: 'http://<URL ZABBIX>/zabbix/api_jsonrpc.php',
    user: '<USERNAME>',
    password: '<PASSWORD>'
  })

const client = new Client(api)

const main = async () => {
    try {
        const arrayGroups = await client.getProblems()
        const data = JSON.stringify(arrayGroups)

        fs.writeFile("./files/example.txt",data , function(err){
            if(err){
                  return console.log('erro')
              }
              console.log('Arquivo Criado');
          });

      } catch (error) {
        console.error(error)
      }
}
setInterval(main, 60000)