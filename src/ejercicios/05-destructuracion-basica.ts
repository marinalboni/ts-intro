//TYPESCRIPT

//OBJECT DESTRUCTURING
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 34,
    cancion: 'No one dies from love',
    detalles: {
        autor: 'Tove Lo',
        anio: 2022
    }
}

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor, anio } = detalles;

//OTRA MANERA DE HACERLO
// const { volumen, segundo, cancion, detalles: { autor, anio } } = reproductor;

console.log('El volumen actual es de: ', volumen);
console.log('El segundo actual es de: ', segundo);
console.log('La cancion actual es: ', cancion);
console.log('El autor es: ', autor);
console.log('El año es: ', anio);






//ARRAY DESTRUCTURING
const dragonBallZ: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [ goku, , laranja ] = dragonBallZ;

console.log('Personaje 1: ', goku); //'Goku'
console.log('Personaje 3: ', laranja); //'Trunks'