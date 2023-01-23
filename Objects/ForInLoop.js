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

// for(let key in Human)
// {
//     console.log(key);
// }
for(let key in Human)
{
    // console.log(key,Human.key);//this will not work as key is not the part of the object
    console.log(key,Human[key]);
}

for(let k in Human.laptop)
{
    console.log(k,Human.laptop[k]);
}