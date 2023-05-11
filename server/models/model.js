const execQuery = require('../helpers/execQuery');
const TYPES = require('tedious').TYPES;

const allProducts = () => {
    const query = `
        SELECT idProducto, nombre, precio, imagen FROM productos
    `;
    return execQuery.execReadCommand(query);
};

const getByProductID = (productID) => {
    const query = `
        SELECT * FROM productos
        WHERE productID = @idProducto
    `;

    const parameters = [
        {name: 'productID', type: TYPES.UniqueIdentifier, value: productID},
    ];

    return execQuery.execReadCommand(query, parameters);
};

module.exports = {
    allProducts,
    getByProductID,
};