const Route = require('express').Router();
const {v4: uuidv4} = require('uuid');
const Models = require('../models/model');

Route.get('/', async(req, res) => {
    Models.allProducts()
    .then(data => {
        res.status(200).json({ data });
    })
    .catch(error => {
        res.status(500).json({ error });
    });
});

Route.get('/:id', async (req, res) => {
    const {id: productID} = req.params;
    Models.getByProductID(productID)
    .then(data => {
        if(data.length > 0) {
            res.status(200).json({ data: { ...data[0] } });
        }
        else {
            res.status(404).json({ error: 'No se encuentra esta tarea' });
        }
    })
    .catch(error => {
        res.status(500).json({error});
    });
});

module.exports = Route;