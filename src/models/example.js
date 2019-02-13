import db from '../database';

const Example = db.sequelize.define('example', {
    name: {
        type: db.Sequelize.STRING(50),
        allowNull: false
    },
    description: {
        type: db.Sequelize.STRING(100),
        allowNull: true
    }
});

//cria tabela caso não exista, isso no startup do projeto
Example.sync();

export default Example;