const express = require('express');
const app = express()

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

module.exports = app;