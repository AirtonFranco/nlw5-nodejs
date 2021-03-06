/**
 * yarn init -y => create package.json
 * yarn add express => instal express
 * yarn add types/express -D => install typescript in express
 * yarn add typescript -D => install typescript in project 
 * yarn tsc --init => file configuration typescript (tsconfig.json)
 * yarn add ts-node-dev -D => translate typescript for node
 * yarn dev => run aplication
 */

/**
 * Baixar a extensão no crhome JSON Viewer => Opcional
 */

/**
 * TypeORM => O typeORM é um framework de DB 
 * que padroniza todos os tipos de DB na minha aplicação,
 * ele é mais ultilizado com o TypeScript, 
 * existe tambem o SequelizeORM que é mais ultilizado no node puro
 * 
 * Instalando o TypeORM
 * yarn add typeorm reflect-metadata sqlite3 => instalando o sqlite3 via typeorm
 * yarn typeorm migration:create -n CreateSettings => criando a migration (CreateSettings é o nome)
 * yarn typeorm migration:run => execultando as migrations
 * yarn typeorm migration:revert => reverter as tabelas criadas
 * yarn add uuid => adicionando a lib para o uuid (universal unique ID)
 * yarn add @types/uuid -D => lib uuid em modo dev
 */

//Fluxo
/**
 * Migrations: Criar a Migration
 * entities: criar a entidades
 * repositories: criar a repository
 * services: criar a service
 * controller: criar a controller
 */

/**
 * Aula - 4
 * yarn add socket.io => instalando o socket.io
 * yarn add @types/socket.io => instalando as tipagens so socket.io para o typescript
 * yarn add ejs
 * yarn add socket.io-client => intalando o modulo clint do socket no front da aplicação
 */

//ARQUITETURA POR CAMADAS - HEXAGONAL
//FUNÇÕES DE CADA CAMADA
/**
 * entity => representação da entidade, tabela do banco de dados dentro da aplicação
 * repository => responsavel pelas operações com o banco de dados
 * services => responsavel por toda a regra de negocios
 * controller => responsavel por gerenciar as requisições e respostas do fluxo
 * 
 * VIDEO EXPLICATIVO: https://www.youtube.com/watch?v=kYx1QC1XZSo
 */