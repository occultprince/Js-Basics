//do-while
let a = 0;
let i = 0
do{
  i+=1
  a+=100;
}while(i<=10);
console.log(a)

//Facotial using while:
let result = 1
let j = 1;
while(j<=5){
    result*=j;
    j++;
}
console.log("Factorial:",result)

//
let number = 100
let mul = 4
switch (mul){
    case 1:
        number*=1
        console.log("Multiple of 1",number)
        break
    case 2:
        number*=2
        console.log("Multiple of 2",number)
        break
    case 3:
        number*=3
        console.log("Multiple of 3",number)
        break
    case 4:
        number*=4
        console.log("Multiple of 4",number)
        break
    default:
        console.log("Not a multiple")   
}

//redecalaration
console.log("let")
let num1 = 10
num1 = 100
{
let num1 = 20
console.log(num1)
}
console.log(num1)
//redeclaration not possible in the same scope for both let and const
console.log("const")
const num2 = 10
{
const num2 = 20
console.log(num2)
}
console.log(num2)

console.log("var")
var num3 = 10
var num3 = 100

function get(){
var num3 = 20
console.log(num3)
}
get()
console.log(num3)

//key-value pair with console in js like dict in py
const rec = {"Prince":1}
const rec2 = {1:"Prince",2:"Singh",3:"Padiyar"}
console.log(rec["Prince"],rec2[1],rec2[2])

rec.key = "singh"
console.log(rec["singh"])

//array declaration and use of const into it
const arr = [1,2,3,4]
arr.push([5])

//for loop using let
for(let i =0 ;i<3;i++){
    console.log(i);
}
let getting;
console.log(getting)