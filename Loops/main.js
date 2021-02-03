// Done by Carlos Amaral (2021/01/26)

//For loops

for(let i=0; i<10; i++) {
    console.log(i);
}


//////////////////////////////////

for(let i=0; i<8; i++) {
    console.log(`For Loop Number: ${i}`);
}

///////////////////////////////////

// While loops

let i = 0;
while(i<7) {
    console.log(`While Loop Number: ${i}`);
    i++;
}

////////////////////////////////////


const todos = [
 {
     id: 1,
     text: 'Take out trash',
     isCompleted: true

 },
 {
    id: 2,
    text: 'Meeting with boss',
    isCompleted: true
 },
 {
    id: 3,
    text: 'Dentist appt',
    isCompleted: false
 }
];

for(let i=0; i<todos.length; i++) {
    console.log(todos[i].text);
}
