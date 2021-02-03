// Done by Carlos Amaral (2021/01/31)

const x = 10;

if (x==10) {
    console.log('x is 10');
}

//////////////////////////////

const y = 20;

if (y===10) {
    console.log('y is 10');
} else{
    console.log('y is NOT 10')
}


//////////////////////////////

const n = 20;

if (n===10) {
    console.log('x is 10');
} else if (x > 10) {
    console.log('x is greater than 10');
} else {
    console.log('x is less than 10');
}


//////////////////////////////


const p = 10;

const color = p > 10 ? 'red': 'blue';

switch(color) {
    case 'red':
        console.log('color is red');
        break;

    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}

