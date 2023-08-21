var singers = [
    {name: 'Steven Tyler', band: 'Aerosmith', born: 1948},
    {name: 'Karen Carpenter', band: 'The Carpenters', born: 1950},
    {name: 'Kurt Cobain', band: 'Nirvana', born: 1967},
    {name: 'Chris Cornell', band: 'Soundgarden', born: 1964},
];
// console.log(singer[0]['name]);

/* 
function pluck(list, propertyName) {
    let propertyArr = [];
    list.forEach(singer => {
        propertyArr.push(singer[propertyName]);
    })
    return propertyArr;
} */

function pluck(list, propertyName) {
    switch (propertyName) {
        case 'name':
            console.log('Nombre seleccionado');
            let onlyNames = [];
            for(const name of list) {
                onlyNames.push(name.name);
            }
            console.log(onlyNames);
            break;
        case 'band':
            console.log('Banda seleccionada');
            let onlyBands = [];
            for(const band of list) {
                onlyBands.push(band.band);
            }
            console.log(onlyBands);
            break;
        case 'born':
            console.log('Creacion seleccionada');
            let onlyBorns = [];
            for(const born of list) {
                onlyBorns.push(born.born);
            }
            console.log(onlyBorns);
            break;
        default:
            console.log('Propiedad no encontrada');
    }
}

// Reto 2

function numeroTelefonico(array) {
    const parentesis = array.slice(0,3).join('');
    const num = array.slice(3,6).join('');
    const terminacion = array.slice(6).join('');

    //return (${parentesis}) ${num}-${terminacion}; //Aqui va todo en template string despues de 
}

console.log(numeroTelefonico([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// Reto 3
function findMissingNumbers(array) {
    let n = [];
    let max = array.reduce((a,b) => {return Math.max(a,b)});

    for (let i=1; i< max; i++) {
        if (!array.includes(i)) {
            n.push(i)
        }
    }
    return n;
}

console.log(findMissingNumbers([2, 1, 9, 5, 7, 3, 10]));  //[4, 6, 8]