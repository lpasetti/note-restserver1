require('./config/config');

const express = require('express')
const app = express()
const bodyParser = require('body-parser');
// parse application/x-www-fprm-urlendoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.json('hola')
})

app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.json({
        id
    });
});

app.post('/usuario', (req, res) => {
    let body = req.body;
    if (body.nombre == undefined) {
        res.status(400).json({
            ok: false,
            mensaje: "El nombre es necesario"
        });
    } else {
        res.json({
            body
        });

    }
});

app.listen(port, () => {
    console.log(`Listening em puerto:${port}`);
});