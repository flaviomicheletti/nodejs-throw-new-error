// const service = require('../service')

module.exports = {
    index: function (req, res) {
        res.send("oi");
    },
    show: function (req, res) {
        throw new Error('Oooops!');
    },
    tryCatch: function (req, res) {
        try {
            throw new Error('Oooops!');
        } catch (e) {
            console.log('deu ruim');
            // ele deixa a requisição sem resposta (esperando por uma)
            // o erro é exibido no terminal, mas a requisição entra num loop infinito
            //
            // Sending request...
        }
    },
    nothing: function (req, res) {
        // nothing
        // idem ao comportamento acima, porém não mostra nada no terminal.
    },
    tryCatchLogE: function (req, res) {
        try {
            throw new Error('Oooops!');
        } catch (e) {
            console.log(e);
            // ok, loga o erro no terminal, mas a requisição fica aguardando
        }
    },
    resSend: function (req, res) {
        res.status(404).send();
        // nada responde, mas libera a requisição (termina).
    },
    tryCatchSend: function (req, res) {
        try {
            throw new Error('try catch send!');
        } catch (e) {
            // loga o erro (mais verboso) no terminal
            console.log(e);
            // conclui a requisição com erro menos verboso
            res.status(500).send(e.toString());
        }
    },
    //
    // https://expressjs.com/en/advanced/best-practice-performance.html#use-try-catch
    //    
    search: function (req, res) {

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
    }
};