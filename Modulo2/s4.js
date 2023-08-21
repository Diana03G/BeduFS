// Reto 1

function power(base, exponent) {
    let resultFunction;
    return resultFunction = base ** exponent;
}

console.log(power(2, 10));

// Reto 2

function getLargerInt(num1, num2) {
    if(num1 > num2) {
        return num1;
    }
    else return num2;
}

console.log(getLargerInt(7, 4));

// Reto 3

function fibonacci(num) {
    let fib = [0, 1];

    for(let i=2; i< num; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib[7];
}

fibonacci(1);
fibonacci(2);