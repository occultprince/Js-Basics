//do-while
let a = 0;
let i = 0
do{
  i+=1
  a+=100;
}while(i<=10);
console.log(a)

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
