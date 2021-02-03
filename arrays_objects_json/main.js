// Done by Carlos Amaral (2021/01/26)

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

console.log(todos);
console.log(todos[2].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON)
