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

    PASS  ./server.test.js
    √ GET / (78ms)
    √ GET /show (6ms)
    √ GET /try-catch
    √ GET /nothing
    √ GET /try-catch-log-e
    √ GET /res-send (6ms)
    √ GET /try-catch-send (6ms)
    √ GET /search (12ms)

    ----------|---------|----------|---------|---------|---------------------------------
    File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
    ----------|---------|----------|---------|---------|---------------------------------
    All files |   39.39 |      100 |       0 |   39.39 |
    app.js   |   39.39 |      100 |       0 |   39.39 | 8,12,16-19,33-36,42,47-53,62-69
    ----------|---------|----------|---------|---------|---------------------------------
    Test Suites: 1 passed, 1 total
    Tests:       8 passed, 8 total
    Snapshots:   0 total
    Time:        5.05s
    Ran all test suites.