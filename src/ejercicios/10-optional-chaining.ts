//ENCADENAMIENTO OPCIONAL

interface Pasajero {
    nombre: string;
    hijos?: string[];
};

const pasajero1: Pasajero = {
    nombre: 'Amanda'
};

const pasajero2: Pasajero = {
    nombre: 'Joaninha',
    hijos: ['Junior', 'Belinha']
};

function impromeHijos(pasajero: Pasajero): void {
    let cuantosHijos = pasajero.hijos?.length || 0; //si es null o undefined, retorna 0
    console.log(cuantosHijos)
};

impromeHijos(pasajero1)