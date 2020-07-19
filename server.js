const app = require('./app.js');

//
// start server
//
const server = app.listen(3000, function () {

    const host = server.address().address
    const port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)
})
