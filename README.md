# filmesMongoDB

Turma Online 11 - Todas em Tech | Back-end | 2021 | Semana 13: Crud de filmes


## Sobre o Projeto

O **FILMESMONGODB** é um sistema de gerenciamento de catálogos de filmes.

Onde receberemos cadastros de títulos(filmes).

## Tecnologias que vamos usar:
| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `express` | Framework NodeJS |
| `dotenv` | Dependência para proteger dados sensíveis do projeto|
| `mongoose` | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections|
| `nodemon` | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente|
| `npm ou yarn` | Gerenciador de pacotes|
| `MongoDb` | Banco de dado não relacional orietado a documentos|
| `MongoDb Compass` | Interface gráfica para verificar se os dados foram persistidos|
 `Insomnia ou Postman` | Interface gráfica para realizar os testes|

<br>
<br>

## 📁 Arquitetura 

```
 📁 FILMESMONDODB
   |
   |-  📁 src
   |    |
   |    |- 📁 data
   |         |- 📄 database.js
   |
   |    |- 📁 controllers
   |         |- 📄 filmesController.js
   |
   |    |- 📁 models
   |         |- 📄 filme.js
   |
   |    |- 📁 routes
   |         |- 📄 filmesRoutes.js
   |
   |    |- 📄 app.js
   |
   |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package
   |- 📄 server.js

```
### Requisitos 
- [x]  "**/filmes**" Deverá criar um filme

- [x]  **"/filmes"** Deverá retornar todos os filmes cadastrados
- [x]  **"/filmes/[ID]"** Deverá retornar o filme solicitado

- [ ]  **"/filmes/[ID]"** Deverá alterar informação específica dentro de um filme por id específico e retorna o filme alterado

- [x]  **"/titulos/[ID]"** Deverá deletar o filme por id específico e retorna mensagem 


