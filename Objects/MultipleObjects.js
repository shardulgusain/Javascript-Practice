function Obj(user_name) {
    this.naam=user_name,
    this.fun =  function(){
        console.log("object created successfully using constructor function")
    }
}
let sample =  new Obj("Shardul");
console.log(sample.naam);
//This constructor function return this which is invisible and passed to new
let sample2 = new Obj("Gusain");
console.log(sample2.naam);