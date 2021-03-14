const axios = require('axios');

// sem essa linha aqui não temos o coverage
require('../src/app.js');

axios.defaults.baseURL = 'http://localhost:3000';

test('GET /', async () => {

    let res = await axios.get('/');
    expect('oi').toBe(res.data);

});

// a api lança uma exexeção não tratada, e agora José ?
test('GET /show', async () => {

    try {
        let res = await axios.get('/show');
    } catch (error) {
        expect(error.message).toBe('Request failed with status code 500');
    }

});

test('GET /try-catch', () => {

    //
    // treta
    //

});

test('GET /nothing', () => {

    //
    // + treta
    //

});

test('GET /try-catch-log-e', async () => {

    //
    // + treta
    //

});

test('GET /res-send', async () => {

    let res;
    try {
        res = await axios.get('/res-send');        
    } catch (error) {
        expect(res).toBe(undefined);
        expect(error.message).toBe("Request failed with status code 404");                    
    }

});

// 

test('GET /try-catch-send', async () => {

    // let res = await axios.get('/try-catch-send');
    // expect('Error: try catch send!').toBe(res.data);

    let res;
    try {
        res = await axios.get('/try-catch-send');        
    } catch (error) {
        expect(res).toBe(undefined);
        expect(error.message).toBe("Request failed with status code 500");                    
    }

});

test('GET /search', async () => {

    let res = await axios.get('/search?params={"foo": "bar"}');
    expect('Success').toBe(res.data);

    try {
        let res = await axios.get('/search?params={foo: bar}');
    } catch (error) {
        expect('Success').toBe(res.data);
    }

});
