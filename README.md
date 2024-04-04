# Lista de Pokemons

Este é um código que consiste em uma aplicação web simples para exibir uma lista de Pokémons. Ele inclui um servidor Node.js com Express para fornecer uma API que busca dados de um banco de dados MySQL e uma página HTML para exibir os Pokémons usando JavaScript para consumir a API.

## Arquivos no Pacote:

1. **node_modules**: Pasta que contém os módulos instalados via npm.
2. **api.js**: Arquivo JavaScript que configura um servidor Express para fornecer uma API RESTful que retorna dados de Pokémons do banco de dados MySQL.
3. **index.html**: Página HTML que exibe a lista de Pokémons.
4. **package-lock.json**: Arquivo gerado automaticamente pelo npm para garantir a consistência das instalações dos pacotes.
5. **package.json**: Arquivo de manifesto do Node.js que lista as dependências e configurações do projeto.
6. **script.js**: Arquivo JavaScript que consome a API fornecida pelo servidor Express e renderiza a lista de Pokémons na página HTML.
7. **site.css**: Arquivo CSS que estiliza a página HTML.

## Como Executar:

1. Certifique-se de ter o Node.js e o MySQL instalados no seu sistema.
2. Clone este repositório em sua máquina local.
3. No terminal, navegue até o diretório do projeto.
4. Instale as dependências executando o comando `npm install`.
5. Inicie o servidor Node.js com o comando `node api.js`.
6. Abra o navegador e vá para `http://localhost:3000` para visualizar a lista de Pokémons.

## Descrição dos Arquivos:

- **api.js**: Este arquivo configura um servidor Express que se conecta ao banco de dados MySQL e fornece um endpoint `/pokemons` para recuperar os dados dos Pokémons.
- **index.html**: Esta página HTML contém uma estrutura simples para exibir a lista de Pokémons. Ele inclui um contêiner para os Pokémons e um script JavaScript para manipular os dados recebidos da API.
- **script.js**: Este arquivo JavaScript é responsável por fazer uma solicitação fetch para a API `/pokemons`, receber os dados em formato JSON e renderizá-los dinamicamente na página HTML.
- **site.css**: Este arquivo CSS fornece estilos para a página HTML, incluindo o layout da lista de Pokémons e o design dos cartões individuais dos Pokémons.

Este pacote de código é um exemplo básico de como criar uma aplicação web simples usando Node.js, Express, MySQL e JavaScript para renderização dinâmica do lado do cliente.

**Nota:** Certifique-se de substituir as credenciais de conexão do banco de dados no arquivo `api.js` com as suas próprias para que a aplicação funcione corretamente.
