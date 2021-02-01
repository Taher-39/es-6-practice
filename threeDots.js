//add with old type
const ages = [1,2,3,5];
const ages2 = [6,7,8,9];
const ages3 = [12,1,8,21];

const allAges = ages.concat(ages2).concat([19]).concat(ages3);
console.log(allAges);

//add with three dots
const allAges2 = [...ages, ...ages2, 19, ...ages3];
console.log(allAges2);

//find max 

const a = 5, b = 10, c = 4;
console.log(Math.max(a, b, c));

//fine max array element
const numberMax = [152, 659, 998, 694]

console.log(Math.max(...numberMax));

 

