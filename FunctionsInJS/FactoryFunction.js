function objcreate(user_name){
return {
    naam: user_name,
    age: 22,
    greet(){
        console.log("Hello I am Shardul")
    }
}
}

const obj1 = objcreate('Kabali');
console.log(obj1.naam);

const obj2 = objcreate('Gusain');
console.log(obj2.naam);

