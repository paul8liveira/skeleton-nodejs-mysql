#### Instalação necessária (Windows):
Para executar o projeto local, você precisa ter instalado os seguintes itens:
- nvm (node version manager) => https://github.com/coreybutler/nvm-windows/releases/tag/1.1.7
- NodeJs 10.x.x
- Docker
- MySQL 5.7.25 => https://dev.mysql.com/downloads/windows/installer/5.7.html (no caso, se preferir utilizar docker, não há necessidade de instalar. Se optar pelo docker você vai precisar pelo menos de um IDE para conexão com o MySQL)

Obs: Instale o Node através do nvm pelo comando:
```html
nvm install 10.x.x (estamos com a 10.15.1 atualmente)
nvm use 10.x.x
```
##### Inicializar projeto:
Para inicializar o projeto é necessário antes rodar o comando de install:
```html
npm install
```
Assim que finalizar, você já pode executar o projeto. Se você optou por não instalar o MySQL execute:
```html
npm run docker-mysql
npm start
```

O MySQL será exposto em: 

**localhost:3306 **
**usuário:** root 
**senha:** pecege

Se tudo correr bem, a aplicação vai estar em http://localhost:3000