//DESTRUCTURING ARGUMENTOS

interface Producto {
    descripcion: string;
    precio: number;
};

const telefono: Producto = {
    descripcion: 'Nokia A1',
    precio: 300
};

const ipad: Producto = {
    descripcion: 'Apple ipad',
    precio: 1000
};

function calculaImpuestoSobreVenta(productos: Producto[]): number {
    let total: number = 0;

    productos.forEach(({ precio }) => {  //<-------- AQUIIIIIIIII
        total += precio
    })

    return total * 0.15
};

const articulos: Producto[] = [telefono, ipad];

const isv = calculaImpuestoSobreVenta(articulos);

console.log(isv);