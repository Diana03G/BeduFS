const PI = 3.1416;

function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplica(a,b) {
    return a * b;
}

// Para exportar archivos a otro archivo, nocotros usamos algo que se conoce como
// CommonJS: requiere(), exports, module.exports
// EMACScript: import, export (se requiere que los archivos tengan extension "mjs")

// Exportando una variable llamada "PI"
exports.PI = PI;

// Utilizar "exports" es para exportar cosas (funciones/variables/clases) por partes.
exports.suma = suma;
exports.resta = resta;
exports.multiplica = multiplica;

/* Exportar todo de un jalon ***
module.exports = {
    PI, suma, resta, multiplica
}
*/

