var name1 = 1
console.log(name1)

name1 = 10
console.log(name1)

//multi declare single line
var char1 = 'A', char2 = 'B'
console.log(char1,char2)
 
var char3, char4 ,char5 = 'C'  //undercalered are = undefined (inital value of var)
console.log(char3,char4,char5)

//single value multi variable assign
var char6 = char7 = char8 = 'D' //Not applicable in strict mode
console.log(char6,char7,char8)



//var not : block scoped
{
    name1 = 100
    console.log(name1)
}
//var scope: function scope
function varscope(){
    var name2 = 123
    name1 = 1000
    console.log(name1)
    console.log(name2)
}
varscope()
//reference error  :  console.log(name2)  :name2 is locked within function scope
//If refereing a value to another variable or to console or using it out of the scope
//makes reference error

//Non configurable
var c = 10
//delete c : Delete cannot be called to an identifier in strict mode
delete globalThis.c;
console.log(c)

//Hositing
console.log(number) //creation of (var number;) at the top of the scope (hoisting) 
var number = 10;

console.log(value)
//this is not scope of the var
{ 
    console.log(value)
    var value = 100;
    console.log(value)

}
//function scope
//reference error : console.log(numed)  : numbed not decalred in the scope out of function 
function scopecheck(){
    var numed = 100; //numed defiend within function scope
console.log(numed)
}

//redeclaration & reassignement
var nummer = 100
console.log(nummer)
var nummer = "Prince"
console.log(nummer)

nummer = 10000
console.log(nummer)
console.log(typeof(nummer))


nummer = "prince"+1000 //string type creation 
console.log(typeof(nummer))

//let varaible === var varaiable (name) applies to same scope only
let a;
//Syntax error : var a;  : Identifier already declared 

function samevar(){
    var a = 100  // enclosed within function scope
}

//unqualified identifier assignment
var x = y = 10 //y is now global as it is not declared as var
//Any var can be created as global from this method in any scope

//func to check global varaibles
if("y" in globalThis){
    console.log("y is global")
}

var x1 = y1 = 10 // not applicable in strict mode
console.log(y1)


//we cannot get the value tyoe of variable declared in aother scope

//creating multiple varaibles at once with the value
const result = /(d+)(b+)(c+)/.exec("dddbcccccc");
var [, d, b, c] = result;
console.log(d, b, c); // "aaa" "b" "cc"