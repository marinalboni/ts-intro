//GENERICOS <T>
//SI NO, SERIA DE TIPO ANY

function queTipoSoy<T>(argumento: T) {
    return argumento;
}

let soyString = queTipoSoy('Hellowww');

let soyNumber = queTipoSoy(295);

let soyBoolean = queTipoSoy(false);
