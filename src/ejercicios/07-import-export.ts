import { calculaImpuestoSobreVenta, Producto } from './06-destructuracion-funcion';

const carritoCompras: Producto[] = [
    {
        descripcion: 'blabla',
        precio: 120
    },
    {
        descripcion: 'blabla2222',
        precio: 100
    }
];

const impuesto = calculaImpuestoSobreVenta(carritoCompras);

console.log(impuesto);