//function deceleration 
function doubleIt(num){
    return num * 2;
}

console.log(doubleIt(5));

//function expresion 
const doubleAgain = function myFun(num){
    return num * 2;
}

const result = doubleAgain(10);
console.log(result);

// arrow function 
const doubleItAgain = num => num * 2;

const resultItAgain = doubleItAgain(15);
console.log('arrow double result:',resultItAgain);

// arrow function more parameter
const add = (num1, num2 = 5/*backUp*/) => num1 + num2;
console.log('More parameter add result:',add(5));

// without parameter
const give39 = () => 39;
const result39 = give39();
console.log('Without parameter result:',result39)