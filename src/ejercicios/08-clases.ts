//CLASES

// class Heroe {
//     private alterEgo: string;
//     public edad: number; //default es public
//     static nombreReal: string; //se puede acceder sin tener que crear una instancia: new Heroe()
//
//     constructor(alterEgo, edad, comida) {
//         this.alterEgo = alterEgo;
//         this.edad = edad;
//         this.comida = comida;
//     }
// };

// const wanda = new Heroe()




//MEJOR MANERA DE HACERLO Y MÁS CORTA

class Heroe {

    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal?: string
    ) {}

};

const ironman = new Heroe('Ironman', 35, 'Tony Stark');

console.log(ironman); //Heroe {alterEgo: 'Ironman', edad: 35, nombreReal: 'Tony Stark'}


//EXTENDER UNA CLASE

class Avenger extends Heroe {

    constructor(
        public bestFriend: string,
        public alterEgo: string,
        public edad: number,
        public nombreReal?: string
    ) {
        super( alterEgo, edad, nombreReal );
    }

}

const spider = new Avenger('Tony', 'Spider Man', 24 )

console.log(spider)
