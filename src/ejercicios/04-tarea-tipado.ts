//TAREA INTERFACE

interface Direction {
    calle: string;
    ciudad: string;
    pais: string;
}

interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direction;
    mostrarDireccion: () => string;
}


const superHeroe1: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main St',
        ciudad: 'NY',
        pais: 'USA'
    },
    mostrarDireccion() {
        return `${this.nombre}, ${this.direccion.ciudad}, ${this.direccion.pais}`
    }
}

const direccion = superHeroe1.mostrarDireccion();

console.log(direccion);