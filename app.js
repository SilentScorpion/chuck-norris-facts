const express = require('express');
const app = express();

app.use(express.static('./public'));

app.get('/', (req,res) => {
    res.send('Hello');
});

app.listen(5000, (req,res) => console.log('started the server'));