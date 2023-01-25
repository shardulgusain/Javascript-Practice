let a = ["shardul",2,5,6,2323,3232,221];
console.log(a);
a.push("Gusain");
console.log(a);


//Method 2
let b = new Array("Shardul",2,232,322,323,3,2);
console.log(b);


// for (const index of b) {
//     console.log(index);
// }

b.forEach(index => {
    console.log(index);
});