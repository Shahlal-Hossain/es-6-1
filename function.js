const errowFunction = (a, b ) => a * b 
console.log(errowFunction(6,90));

const errowF = () => console.log("hello")

errowF()

const functionErrow = (num1,num2 = 1) => {
    const plus = 100 ;
    const result =( num1 + num2 ) * plus + ' ' + "errow number:";
    return result;
}
console.log(functionErrow(22 , 18))
const errowfun = number => {
    return number * number;
}
console.log(errowfun(100));