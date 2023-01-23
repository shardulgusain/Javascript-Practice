let Human ={
    name: "shardul",
    age:22,
    'work experience': 'fresher',
    laptop:{
        cpu:'heavyDriver',
        ram: 12,
        brand : 'HP'
    }
}
console.log(Human.laptop.brand?.length);
console.log(Human.laptop.brand1?.length);//this will print undefined as brand1 does not exist
if(Human.laptop.brand1=== undefined)
{
    console.log("brand1 does not exist");
}
delete Human.laptop;0
console.log(Human);