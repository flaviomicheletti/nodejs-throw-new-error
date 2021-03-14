const controller = require('./controller');

module.exports = function (app) {
    app.get('/', controller.index)
    app.get('/show', controller.show)
    app.get('/try-catch', controller.tryCatch)
    app.get('/nothing', controller.nothing)
    app.get('/try-catch-log-e', controller.tryCatchLogE)
    app.get('/res-send', controller.resSend)
    app.get('/try-catch-send', controller.tryCatchSend)
    app.get('/search', controller.search)
};