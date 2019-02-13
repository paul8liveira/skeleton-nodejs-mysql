import i18n from 'i18n';

i18n.configure({
    locales: ['en', 'es', 'pt'],
    directory: __dirname + '/locales',
    defaultLocale: 'pt',
    cookie: 'lang',
    queryParameter: 'lang',
    logDebugFn: function (msg) {
        console.log('debug', msg);
    },
    logWarnFn: function (msg) {
        console.log('warn', msg);
    },
    logErrorFn: function (msg) {
        console.log('error', msg);
    },    
});

module.exports = (req, res, next) => {    
    i18n.init(req, res, next);
};