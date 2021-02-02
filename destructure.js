const person = {name: 'rafi', age: 15, adress: 'bonani', phone: '+880179358241', school: 'dhaka collage' }
const { name, age, phone, bowName = ''/* backUp */ }= person;//boro object ba array theke value pawyer way hochhe estructure


// const age = person.age;
// const adress = person.adress;

console.log('name:', name, 'age:',age, 'phone:',phone, bowName);

// complex object destructure
const complexObject ={
    name: 'Kalam',
    info:{
        address: 'lichuBagan',
        phn: "+880175841578"
    }
}
const {address} = complexObject.info;
/*const {address} = info:{ address: 'lichuBagan', phn: "+880175841578"  }*/
console.log('Address Of Kalam:',address);

/* array destructure */
const haziIndustry = ['ali', 'farhad', 'at', 'faishal', 'azom', 'faruk', 'mahmud', 'ahmad', 'ekbal'];
const [firstName, ...OtherName] = haziIndustry;

console.log(firstName, OtherName);