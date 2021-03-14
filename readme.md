![try-catch](https://user-images.githubusercontent.com/1257048/85043242-85ec7900-b162-11ea-9d31-cd9df9d6cd47.png)

# Lançando erros em Node.js

Brincando de lançar exceções em Nodejs + Express.

    npm i
    npm start // npm debug
    npm test


### API Postman

Use o [Postman](https://www.getpostman.com/), exporte o arquivo `postman-collection.json`.

![api](https://user-images.githubusercontent.com/1257048/85043361-a3b9de00-b162-11ea-9b1d-9f223370a9b8.png)


### Debugando com VSCode

    npm run debug

Agora vá para a visão de Debug pressionando `F5`.

Coloque um break point e sensibilize a aplicação.


### Veja também

+ https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/throw
+ https://www.joyent.com/node-js/production/design/errors


### Coverage

    > jest --coverage

    PASS  tests/server.test.js
    √ GET / (79ms)
    √ GET /show (9ms)
    √ GET /try-catch (1ms)
    √ GET /nothing
    √ GET /try-catch-log-e
    √ GET /res-send (5ms)
    √ GET /try-catch-send (8ms)
    √ GET /search (16ms)

    ---------------|---------|----------|---------|---------|-------------------
    File           | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
    ---------------|---------|----------|---------|---------|-------------------
    All files      |      50 |      100 |       0 |      50 |
    app.js         |     100 |      100 |     100 |     100 |
    controller.js  |    4.76 |      100 |       0 |    4.76 | 5-60
    routes.js      |     100 |      100 |     100 |     100 |
    ---------------|---------|----------|---------|---------|-------------------
    Test Suites: 1 passed, 1 total
    Tests:       8 passed, 8 total
    Snapshots:   0 total
    Time:        3.544s
    Ran all test suites.