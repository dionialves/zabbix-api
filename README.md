# ###zabbix-api

Esse projeto consome a API do zabbix, e faz parte de um estudo para integração do ZABBIX com o projeto <a href="https://github.com/esnet/react-network-diagrams">react-network-diagrams</a> desenvolvido por <a href="https://github.com/esnet">esnet</a> com o objetivo de mostrar um mapa contendo elementos de rede.

A demonstração do projeto original pode ser encontrado no seguinte endereço: <a href="https://my.es.net/">ESNET PORTAL</a>


O consumo da API do Zabbix, escrita nesse projeto é muito simples, ela consulta os GRUPO DE HOSTS que tem alguma TRIGGER ativa, retorna o nome desses grupos e salva e um arquivo. A ideia inicial e construir outro projeto para ler esse arquivo e expor em um mapa os GRUPOS DE HOSTS que tem alguma TRIGGER ativa, diferenciando em cores os que tiverem algum alerta.

Espero que entendam que esse commit inicial é apenas um estudo e será melhorado com o tempo.