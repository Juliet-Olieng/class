// global variable
let a =20
function add(b){
    console.log(a+b);
    // local variable can not be accesed outside the function
   let fruit="apple" ;
    console.log(fruit);
}
add(50);
function greet(){
    let hello="hi"
    function talk (){
        let c ="hello there"
        console.log(`${hello}{c}`)
    }
    talk()
}
greet()