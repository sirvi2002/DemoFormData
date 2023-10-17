const express = require('express');

const app = express();

app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Request-With , Content-Type , Accept , Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
})


app.post('/users', (req, res) => {
    console.log(req.body);
});

app.listen(5000, () => {
    console.log("Listening");
});