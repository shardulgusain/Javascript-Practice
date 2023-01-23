//Functions are objects in javascript How? let's see

let add = function()
{
    return 4+5;
}

console.log(add());
let ans = add;
console.log(ans());//here ans variable is assigned with an add function which is an object hence ans also
console.log(typeof(ans));