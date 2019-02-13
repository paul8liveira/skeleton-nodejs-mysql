import config from "config";

module.exports = function(req, res, next) {
    res.header("Access-Control-Allow-Origin", config.get("CORS.ALLOW"));
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, x-access-token");        
    res.header("Access-Control-Allow-Credentials", true); //habilita cookies para troca de sessão (caso necessário)

    /*browsers verificam antes através do metodo OPTIONS se é possivel efetuar verbos na url*/
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH, DELETE");
        return res.status(200).json({});
    }  
    next();
};
