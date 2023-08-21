// Reto 1
let numbers = [5, 3, 4, 7, 2, 1, 9, 7, 7];

// Reto 2
const car = {
    brand: 'Nissan',
    model: 'Versa',
    year: 2020
}

const keys = Object.keys(car);
const pairs = [];

for(let i = 0; i < keys.length; i++) {
    pairs.push( [keys[i], car[keys[i]]] )
}

console.log(pairs)

/* [['brand', 'Nisaan'], ['model, 'Versa'], ['year', 2020]] */

// Reto 3

const person = {
    firstName: 'John',
    lastName: 'Doe',
    links: {
        web: {
            blog: 'https://jondoe.com'
        },
        social: {
            facebook: 'https://facebook.com/john.doe',
            instagram: 'https://instagram.com/john.doe'
        }
    }
}

// Extraer las URLs de facebook e instagram y renombrar las variables por fb e ig respectivamente.