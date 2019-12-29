var express = require('express')
var app = express()


function index (res) {
    return res.send("function");
}
app.get('/', function (req, res) {
    index(res);
})


function show () {
    throw new Error('Oooops!');
}
app.get('/show', function (req, res) {
    show();
})


function try_catch () {
    try {
        throw new Error('Oooops!');
    } catch (e) {
        console.log('fudeu');
        // ele deixa a requisição sem resposta (esperando por uma)
        // o erro é exibido no terminal, mas a requisição entra num loop infinito
        //
        // Sending request...
    }
}
app.get('/try-catch', function (req, res) {
    try_catch();
})


function nothing () {
    // nothing
    // idem ao comportamento acima, porém não mostra nada no terminal.
}
app.get('/nothing', function (req, res) {
    nothing();
})


function try_catch_log_e () {
    try {
        throw new Error('Oooops!');
    } catch (e) {
        console.log(e);
        // ok, log o erro no terminal, mas a requisição fica aguardando
    }
}
app.get('/try-catch-log-e', function (req, res) {
    try_catch_log_e();
})


function res_send(res) {
    res.send();
    // nada responde, mas libera a requisição (termina).
}
app.get('/res-send', function (req, res) {
    res_send(res);
})


function try_catch_send (res) {
    try {
        throw new Error('Oooops!');
    } catch (e) {
        // loga o erro no terminal
        console.log(e);
        // conclui a requisição (neste caso, vazia)
        res.send();
    }
}
app.get('/try-catch-send', function (req, res) {
    try_catch_send(res);    
})



var server = app.listen(3000, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)
})
