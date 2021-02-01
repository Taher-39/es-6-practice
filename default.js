function add(num1, num2 = 0//hare 0 is backUp) {
    //one way
    // if(num2 == undefined){
    //     num2 = 0;
    // }
    //another way
    // num2 = num2 || 0;

    return num1 + num2;
}

const result = add(12);
console.log(result);