const Zabbix = require("./lib/Zabbix");
const Client = require('./lib/Client');
const fs = require('fs');

const getInformation = () => {
  try {
    const data = fs.readFileSync('./api.conf', 'utf-8');

    const lines = data.split('\n');
    const info = {};

    lines.forEach(lines => {

      if (!lines.startsWith('#')) {

        const [key, value] = lines.split('=').map(item => item.trim());

        if (key && value) {
          info[key] = value;
        }
      }
    });

    return info;  
  } 
  catch (err) {
    console.error('Erro ao ler o arquivo de configuração:', err);
    return null;
  }
}

const info = getInformation();

const api = new Zabbix({
  url: info['url'],
  user: info['user'],
  password: info['password']
 }) 

const client = new Client(api)

const main = async () => {
    try {
        const arrayGroups = await client.getHostsProblems()
        const data = JSON.stringify(arrayGroups)

        fs.writeFile("./files/problem_group_host",data , function(err){
            if(err){
                  return console.log('erro')
              }
              console.log('Arquivo Criado');
          });

      } catch (error) {
        console.error(error)
      }
}
main()
setInterval(main, 60000)
