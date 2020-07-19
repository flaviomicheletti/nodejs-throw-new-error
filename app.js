const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors());

app.get('/', function (req, res) {
    res.send("oi");
})

app.get('/show', function (req, res) {
    throw new Error('Oooops!');
})

app.get('/try-catch', function (req, res) {
    try {
        throw new Error('Oooops!');
    } catch (e) {
        console.log('fudeu');
        // ele deixa a requisição sem resposta (esperando por uma)
        // o erro é exibido no terminal, mas a requisição entra num loop infinito
        //
        // Sending request...
    }
})

app.get('/nothing', function (req, res) {
    // nothing
    // idem ao comportamento acima, porém não mostra nada no terminal.
})

app.get('/try-catch-log-e', function (req, res) {
    try {
        throw new Error('Oooops!');
    } catch (e) {
        console.log(e);
        // ok, loga o erro no terminal, mas a requisição fica aguardando
    }
})

app.get('/res-send', function (req, res) {
    res.send();
    // nada responde, mas libera a requisição (termina).
})

app.get('/try-catch-send', function (req, res) {
    try {
        throw new Error('try catch send!');
    } catch (e) {
        // loga o erro (mais verboso) no terminal
        console.log(e);
        // conclui a requisição com erro menos verboso
        res.send(e.toString());
    }
})

//
// https://expressjs.com/en/advanced/best-practice-performance.html#use-try-catch
//
app.get('/search', function (req, res) {
    // Simulating async operation
    setImmediate(function () {
        var jsonStr = req.query.params
        try {
            var jsonObj = JSON.parse(jsonStr);
            console.log(jsonObj);
            res.send('Success')
        } catch (e) {
            res.status(400).send('Invalid JSON string')
        }
    })
})

module.exports = app;