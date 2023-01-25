let a = ["shardul",2,5,6,2323,3232,221];
console.log(a);
a.push("Gusain");
console.log(a);


//Method 2 Using constructor function
let b = new Array("Shardul",2,232,322,323,3,2);
console.log(b);

//For of loop
for (const index of b) {
    console.log(index);
}
//Using for each loop
// a.forEach(index => {
//     console.log(index);
// });
a.forEach(element => {
    console.log(element)
});
for (const key in b) {
        console.log(b[key]);
}