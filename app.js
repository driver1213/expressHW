
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (request, response) => {
    response.send('Hello, world!');
});
app.get('/cats', (request, response) => {
    response.send('Meow');
});
app.get('/dogs', (request, response) => {
    response.send('Woof');
});
app.get('/cats_and_dogs', (request, response) => {
    response.send('Living together');
});
app.get('/greet/:name', (req, res)=>{

    let name = req.param('name');
    res.send(`Hello, ${name}!`); 
});

app.get('/year', (req, res)=>{

    let age = Number(req.param('age'))

    let year = 2020-age
    res.send(`You were born in ${year}`); 
});


app.listen(3000, () => {
    console.log('Listening on port 3000');
});