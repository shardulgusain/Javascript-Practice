//Note : Variables names are repeated so handle them properly
let num = 7;
let num1 = 7.7;
let user = "Shardul";
console.log(typeof num); //prints the type of variables here "number"
console.log(typeof num1); //Number
console.log(typeof user); //String

//Hexadecimal Number
let hex1 = 0xf; //we know f is 15 in hexadecimal
console.log(hex1); //this will print 15

//Infinity and negative infinity

let num = 5 / 0; //gives infinity
let num = 0 / 5; //gives negative infinity

// Max value of number = Number.MAX_VALUE
// MIN value of number = Number.MIN_VALUE

// //BigINT
let n = 2145445124451348545n;
// console.log(n+2);//throws error
console.log(n + 2n); //Perfect
