COMO RODAR O PROJETO BAIXADO
Instalar todas as dependencias indicada pelo package.json
### npm install

Criar a base de dados "celke" no MySQL
Alterar as credencias do banco de dados no arquivo ".env"

Executar as migrations
### npx sequelize-cli db:migrate

Executar as seeders
### npx sequelize-cli db:seed:all

Rodar o projeto usando o nodemon
### nodemon app.js

Abrir o endereço no navegador para acessar a página inicial
### http://localhost:8080/home



SEQUENCIA PARA CRIAR O PROJETO
Criar o arquivo package
### npm init

Gerencia as requisições, rotas e URLs, entre outra funcionalidades
### npm install --save express

Instalar a dependência de forma global, "-g" significa globalmente. Executar o comando através do prompt de comando, executar somente se nunca instalou a dependência na maquina, após instalar, reiniciar o PC.
### npm install -g nodemon

Instalar a dependência como desenvolvedor para reiniciar o servidor sempre que houver alteração no código fonte.
### npm install --save-dev nodemon

Rodar o projeto usando o nodemon
### nodemon app.js

Abrir o endereço no navegador para acessar a página inicial
### http://localhost:8080

Comando SQL para criar a base de dados
### CREATE DATABASE celke_202308 CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci; 

Sequelize é uma biblioteca Javascript que facilita o gerenciamento do banco de dados SQL
### npm install --save sequelize

Instalar o drive do banco de dados
### npm install --save mysql2

Sequelize-cli interface de linha de comando usada para criar modelos, configurações e arquivos de migração para bancos de dados
### npm install --save-dev sequelize-cli

Iniciar o Sequelize-cli e criar o arquivo config
### npx sequelize-cli init

Manipular variáveis de ambiente
### npm install dotenv --save

Criar a migration da página home do conteúdo do topo 
### npx sequelize-cli migration:generate --name create-homes-tops

Criar a migration acrescentar a coluna imageTop
### npx sequelize-cli migration:generate --name alter-homes-tops-add-imagetop

Executar as migrations
### npx sequelize-cli db:migrate

Executar down - rollback - Permite que seja desfeita a migration, permitindo a gestão das alterações do banco de dados e versionamento.
### npx sequelize-cli db:migrate:undo --name nome-da-migration

Criar a Models da página home do conteúdo do topo 
### npx sequelize-cli model:generate --name HomesTops --attributes titleOneTop:string,titleTwoTop:string,titleThreeTop:string,linkBtnTop:string,textBtnTop:string,imageTop:string

Criar seeders
### npx sequelize-cli seed:generate --name demo-homestops

Executar as seeders
### npx sequelize-cli db:seed:all

Executar uma seed
### npx sequelize-cli db:seed --seed nome-da-seed

Executar down - rollback - Permite que seja desfeita todas as seed, permitindo a gestão das alterações do banco de dados e versionamento.
### npx sequelize-cli db:seed:undo

Executar down - rollback - Permite que seja desfeita uma única seed, permitindo a gestão das alterações do banco de dados e versionamento.
### npx sequelize-cli db:seed:undo --seed nome-da-seed

Criar a Models da página home do conteúdo dos serviços 
### npx sequelize-cli model:generate --name HomesServices --attributes servTitle:string,servIconOne:string,servTitleOne:string,servDescOne:string,servIconTwo:string,servTitleTwo:string,servDescTwo:string,servIconThree:string,servTitleThree:string,servDescThree:string

Criar seeders
### npx sequelize-cli seed:generate --name demo-homesservices

Criar a Models da página home do conteúdo do serviço premium 
### npx sequelize-cli model:generate --name HomesPremiums --attributes premTitle:string,premSubtitle:string,premDesc:text,premBtnText:string,premBtnLink:string,premImage:string

Criar seeders
### npx sequelize-cli seed:generate --name demo-homespremiums

Criar a Models da situação 
### npx sequelize-cli model:generate --name SituationsAbouts --attributes nameSituation:string

Criar seeders
### npx sequelize-cli seed:generate --name demo-situationsabouts

Executar a seed: 20230828142644-demo-situationsabouts.js
### npx sequelize-cli db:seed --seed 20230828142644-demo-situationsabouts.js

Criar a Models da página sobre empresa
### npx sequelize-cli model:generate --name AboutsCompanies --attributes title:string,description:text,image:text,situationAboutId:integer

Criar seeders
### npx sequelize-cli seed:generate --name demo-aboutscompanies

Executar a seed: 20230828142757-demo-aboutscompanies.js
### npx sequelize-cli db:seed --seed 20230828142757-demo-aboutscompanies.js

Criar a Models da página contato do conteúdo texto 
### npx sequelize-cli model:generate --name ContentsContacts --attributes titleContact:string,descContact:string,iconCompany:string,titleCompany:string,descCompany:string,iconAddress:string,titleAddress:string,descAddress:string,iconEmail:string,titleEmail:string,descEmail:string,titleForm:string

Criar seeders
### npx sequelize-cli seed:generate --name demo-contentscontacts