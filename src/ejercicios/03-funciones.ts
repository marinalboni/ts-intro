//FUNCTIONS
function sumar(a, b) {
    return a + b;
};

let result = sumar('Fernando ', 'Ferreira');

console.log(result); //Fernando Ferreira

result = sumar(10, 3);

console.log(result); //13

//manera correcta

function sum(a: number, b: number): string {
    return (a + b).toString();
};

const soma = (a: number, b: number): number => {
    return a + b;
}

//otros tipos de argumentos

function multiplicar(num: number, otroNum: number, base: number): number {
    return num * base;
};

//result = multiplicar(10, 15); -> dice que no recibió un argumento para el parametro 'base' de la función

//si quiero un arg opcional, tiene que estar por ultimo, ejemplo:
function multiplicar2(num: number, base: number, otroNum?: number): number {
    return num * base;
};

//si quiero un parametro DEFAULT
function multiplicar3(num: number, base: number = 2): number {
    return num * base;
};

//SI LA FUNCIÓN NO RETORNA NADA O HACE CONSOLE.LOG
//HAY QUE PONER QUE RETORNAR VOID


//------------------------------------------------------------------------------


//FUNCIONES CON OBJETOS COMO ARGUMENTOS

interface Personagem {
    nombre: string;
    puntosDeVida: number;
    mostrarHP?: () => void;
};

function curarPersonaje(personaje: Personagem, curarX: number): void {
    personaje.puntosDeVida += curarX;
    console.log(personaje);
};

const novoPersonagem: Personagem = {
    nombre: 'Falafel',
    puntosDeVida: 100,
    mostrarHP() {
        console.log(`Tenho ${this.puntosDeVida} pontos de vida.`);
    }
};

curarPersonaje(novoPersonagem, 20);