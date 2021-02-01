const manName = 'rahim';
// name = 'karim'//tis is not possible 
console.log(manName);

const arr = [12, 15, 30]

arr[1] = 10;
arr.push(25);
//arr = ['a', 'v']//this is not posssible 
console.log(arr);

//How can I add a key/value pair to a JavaScript object?
 
const student = {name: 'Kamal', phone: 52848}
student.phone = 6565;
student.name = 'akmal';

// Using dot notation:
student.roll= '12';
//Using square bracket notation:
student['adress'] = 'Dhaka';
console.log(student);

// let area

let peopleName = 'abdul';
peopleName = 'ajmal';

console.log(peopleName);


let sum = 0;

for(let i = 0; i <= 10; i++){
    sum += i;
}
console.log('sum is:', sum);
//console.log(i);//it's not work cause it let. let is a scope variable.
 