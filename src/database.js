import Sequelize from 'sequelize';
import config from 'config';

const user = config.get('DATABASE.USER');
const password = config.get('DATABASE.PASSWORD');
const database = config.get('DATABASE.NAME');

const configDatabase = {
    host: config.get('DATABASE.HOST'),
    dialect: 'mysql',
    operatorsAliases: false,  
    logging: config.get('DATABASE.LOGGING'),
    dialectOptions: {
        timezone: config.get('DATABASE.TIMEZONE'),
        multipleStatements: config.get('DATABASE.MULTIPLESTATEMENTS'),
        connectionLimit: config.get('DATABASE.CONNECTION_LIMIT'),
        ssl: config.get('DATABASE.SSL')
    },    
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },     
};

if (process.env.NODE_ENV === 'production') {    
    configDatabase.logging = false;
}

const sequelize = new Sequelize(database, user, password, configDatabase);

/*função connect retorna uma conexão com o MySQL, esse retorno é uma Promise,
ou seja, somente quando a conexão for estabelecida a Promise será resolvida. Isso é importante pois
precisamos garantir que nossa aplicação só vai estar disponível depois que o banco de dados estiver
conectado e acessível*/

export default {
    connect: () => sequelize.authenticate(),
    sequelize: sequelize,
    Sequelize: Sequelize
}