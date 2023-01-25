function Obj(user_name) {
    this.naam=user_name,
    this.fun =  function(){
        console.log("object created successfully using constructor function")
    }
}
let sample =  new Obj("shardul");
console.log(sample.naam);

