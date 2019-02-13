//vamos considerar aqui nesse exemplo que temos uma rota chamada /products no nosso serviço
//request = faz parte do pkg supertest que está exposto como global no helpers.js
//expect = é parte do pkg chai foi exposto como global no helpers.js 

import Example from '../../../src/models/example';

describe('Routes: Example', () => {    
    const defaultObj = {
        name: 'name',
        description: 'description',
    };

    beforeEach(() => {
        return Example.destroy({
            where: {},
            truncate: true
        })
        .then(() => Example.create(defaultObj));
    });
    afterEach(() => Example.destroy({
        where: {},
        truncate: true        
    }));
            

    //validando o retorno de uma rota
    describe('GET /example', () => {
        it('isso deve validar um objeto teste', done => {
            request
                .get('/example')
                .end((err, res) => {
                    console.log(res.body);
                    expect(res.body).to.eql([defaultObj]);
                    done(err);
                });
        });
    });    
});