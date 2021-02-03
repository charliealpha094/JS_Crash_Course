// Done by Carlos Amaral (2021/02/01)

function addNums(num1, num2) {
    console.log(num1 + num2)
}

addNums(5,4);


///////////////////////////

// Arrow function

const product = (number1, number2) => {
    return number1 * number2
}
console.log(product(5,5))


////////////////////////////

// Constructor function
function Person(firstName, LastName, dob) {
    this.firstName = firstName;
    this.LastName = LastName;
    this.dob = new Date(dob);
}

// Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');


console.log(person1);
