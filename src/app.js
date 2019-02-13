import express from "express";
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser';
import routes from "./routes";
import database from "./database";
import cors from "./middlewares/corsHandler";
import error from "./middlewares/errorHandler";
import i18n from "./middlewares/third-party/i18n";

const app = express();

/*configureExpress que terá a tarefa de configurar o express e
retornar uma nova instância de aplicação configurada.*/
const configureExpress = () => {
    app.use(bodyParser.json());

    //globalização
    app.use(cookieParser());
    app.use(i18n);       
    
    //rotas da api
    app.use("/", routes);    

    /*MIDDLEWARES
    proteção para que somente nossa api management possa consumir nossos dados
    essa configuração permite que as rotas da api não sejam utilizadas por sites não autorizados
    mas pelo postman por exemplo, ela poderá ser consumida*/
    app.use(cors);

    /*ERROR HANDLING*/
    app.use(error.log);     //gera log no insight
    app.use(error.handler); //manipula erro para retornar ao cliente

    return app;
};

/*inicializar o banco antes da aplicação. A função database.connect() retorna
uma Promise, aguardo ela ser resolvida para então chamar que configura o express:*/
export default () => database.connect().then(configureExpress);
