import ExampleController from '../../../src/controllers/example';
import sinon from 'sinon';
import Example from '../../../src/models/example';

describe('Controllers: Example', () => {
    const defaultObj = [{
        name: 'name',
        description: 'description',
    }];

    describe('get() example', () => {
        it('deve chamar a função send com uma lista de objetos', () => {
            const request = {};
            const response = {
                send: sinon.spy()
            };
            Example.findAll = sinon.stub();

            Example.findAll.withArgs({attributes: ['name', 'description']}).resolves(defaultObj);

            const exampleController = new ExampleController(Example);

            return exampleController.get(request, response)
                .then(() => {
                    sinon.assert.calledWith(response.send, defaultObj);
                });
        }); 
    });        

    // it('deve retornar 400 quando houver erro', () => {
    //     const request = {};
    //     const response = {
    //         send: sinon.spy(),
    //         status: sinon.stub()
    //     };
        
    //     response.status.withArgs(400).returns(response);
    //     Example.find = sinon.stub();
    //     Example.find.withArgs({}).rejects({ message: 'Error' });
        
    //     const exampleController = new ExampleController(Example);
        
    //     return exampleController.get(request, response)        
    //         .then(() => {
    //             console.log("response:",response);
    //             sinon.assert.calledWith(response.send, 'Error');
    //         });
    // });    
});