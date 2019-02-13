import setupApp from './app';
import config from 'config';

const port = process.env.PORT || config.get('PORT');
const env = process.env.NODE_ENV || 'development';

setupApp()
    .then(app => app.listen(port, () => {
        console.log(`env node: ${env}`);
        console.log(`serviço rodando em http://localhost:${port}`);
    }))
    .catch(error => {
        console.log('error on setupApp():', error);
        process.exit(1);
    });