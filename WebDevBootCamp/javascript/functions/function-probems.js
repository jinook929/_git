function isEven(numE) {
    return numE % 2 === 0
}

// isEven(4);
// isEven(21);
// isEven(68);
// isEven(333);

// *************************************************

function factorial(numF) {
    let fact = 1
    for(let i = 1; i <= numF; i++) {
        fact *= i //fact = fact * i
    }
    return fact
}

// factorial(5)
// factorial(2)
// factorial(10)
// factorial(0)

// *************************************************

function kebabToSnake(kebab) {
    while(kebab.indexOf('-') !== -1) {
       kebab = kebab.replace('-', '_')
    }
    return kebab
}

// kebabToSnake('hello-world')
// kebabToSnake('dogs-are-awesome')
// kebabToSnake('blah')