/*Tipos de cupones:

Descuentos
3 X 2
2 X 1
Compra x llevate y

*/
const cuponsData = [
    { 
        id: 1, 
        type: '3 x 2',
        desc: '¡Compras 3 cocas y solo pagas por dos!',
        date: '24/07/2023'
    },
    { 
        id: 2, 
        type: '2 x 1',
        desc: '¡Compras 2 cervezas y solo pagas por una!',
        date: '25/07/2023'
    },
    { 
        id: 3, 
        type: 'DESCUENTO',
        desc: '¡40% de descuento en todos los papeles de baño!',
        date: '24/03/2023'
    },
    { 
        id: 4, 
        type: 'COMPRA Y LLEVA',
        desc: '¡Compra un trozo de carne de res y llevate una soda de 1.5 L gratis!',
        date: '24/02/2023'
    }
];

export { cuponsData };