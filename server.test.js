const axios = require('axios');

test(' GET /', async () => {

    const config = {
        method: 'get',
        url: 'http://localhost:3000/',
        headers: {
        }
    };

    let res = await axios.get(config.url);
    expect('oi').toBe(res.data);

});

