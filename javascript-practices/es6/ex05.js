/**
 * Arrow Function
 */

const power = function(x){
    return x*x;
}

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(element){
    console.log(`${element}: ${power(element)}`);
});
numbers.forEach(function(element){
    process.stdout.write(`${element}: ${power(element)} / `);
});

// ex1
console.log('\n--------------------------');
numbers.forEach(function(element){
    //const result = (function(x){
    //    return x*x;
    //})(element);

    //const result = ((x) => {
    //    return x*x;
    //})(element);

    const result = (x => x*x)(element);

    process.stdout.write(`${element}: ${result} / `);
});

// ex2
console.log('\n--------------------------');
numbers.forEach(function(element){
    process.stdout.write(`${element}: ${(x => x*x)(element)} / `);
});

// ex3 여러행 함수
console.log('\n--------------------------');
[5, 3, 15, 1045, 43, 92].forEach(n => {
    if(n % 5 == 0){
        process.stdout.write(`${element}: ${(x => x*x)(element)} / `)
    }
});

// ex4 this