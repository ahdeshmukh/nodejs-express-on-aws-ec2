const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Express Demo App - 1</h1> <h4>Message: Success</h4> <p>Version 1.0</p>');
})

app.get('/products', (req, res) => {
    res.send([
        {
            id: 101,
            name: 'Product 1',
            price: 100
        },
        {
            id: 102,
            name: 'Product 2',
            price: 200
        }
    ])
})

app.listen(port, () => {
    console.log(`Demo app is up and listening to port: ${port}`)
})