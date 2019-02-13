import insights from './third-party/azure-insights';

let log = (err, req, res, next) => {
    insights.trackException(err);
    next(err);
};

let handler = (err, req, res, next) => {
    res.status(err.status || 500).send({
        success: false,
        message: err.message
    });
};

module.exports = {
    log: log,
    handler: handler
}