function abc(name="Manohar S"){
  console.log(name)
}

abc();

let a = [1,2,3];
let b = [1,2,3];
function def(){
  console.log(a+","+b);
}

//def(...a,...b); - ES6
def.apply(null,a,b); //ES5
