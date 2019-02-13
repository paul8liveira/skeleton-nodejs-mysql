import jwt from 'jsonwebtoken';
import config from 'config';

let validate = (req, res, next) => {
    //passa validação de token quando estiver rodando testes de integração
    if(config.get('ENV') === 'test')
        return next();

    let token = req.headers['x-access-token'] || req.headers['authorization'];

    if (token) {
        if (token.startsWith('Bearer '))
            token = token.slice(7, token.length);

        jwt.verify(token, config.get('JWT_SECRET'), (err, decoded) => {
            if (err) {
                return res.json({
                    success: false,
                    message: 'Token inválido'
                });
            } 
            else {
                req.decoded = decoded;
                next();
            }
        });
    } 
    else {
        return res.json({
            success: false,
            message: 'Token de autenticação não informado'
        });
    }
};

module.exports = {
    validate: validate
}