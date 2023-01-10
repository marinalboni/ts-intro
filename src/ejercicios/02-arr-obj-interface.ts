// ARRAYS (arreglos)

let habilidades: string[] = [];
// -> habilidades.push(5) -> error

//para especificar más de un tipo
let skills: (boolean | string | number)[] = [];


//OBJETOS

//para trabajar con objetos, podemos crear interfaces (o no)

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string; //opcional
};

//ahora, a la hora de crear el objeto, puedo utilizar el 'tipo' Personaje

const personaje: Personaje = {
    nombre: 'Joana',
    hp: 100,
    habilidades: ['Bash', 'Healing']
};

personaje.puebloNatal = 'Curitiba';


console.table(personaje); //transforma el objeto en tabla