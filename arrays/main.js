// Done by Carlos Amaral (2021/01/26) 

// Arrays - variables that hold multiple values

const numbers = new Array(1,2,3,4,5);

console.log(numbers);


const fruits = ['apples', 'kiwifruits', 'pears'];

fruits[3] = 'orange';

fruits.push('mangos'); // added to the end

fruits.unshift('strawberries'); // added to the beginning

fruits.pop(); //removes the last member

console.log(Array.isArray(fruits));

console.log(fruits);
console.log(fruits[0]);
