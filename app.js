/*
    b) Put this function in a different module and export it. Then, in this module, import the module that contains your function and call it from this module.
*/
const calculate = require('./calculate')

/*
    c) Create an array of numbers named “myArr”. Your array may have any length (try different lengths to test it). 
*/

calculate(1,2,3)

const myArr2 = [1.5,2,3.1,4,5.9,6,7,8,9,10]  
calculate(...myArr2)


/*
    d) Call your function passing as arguments the members of myArr array using the SPREAD operator. Assign the result to a “result” variable and console log it.
*/
const myArr3 = [1,2,3,4,5,6,7,8,9,10]  
const result3 = calculate(...myArr3)
console.log(`The result is ${result3} `);


/*
    e) Create a new array named “mySecondArr”. Map the contents of your myArr array to mySecondArr array using an anonymous function that multiplies each member of myArr by 2
*/
const mySecondArr = [];

(function () {
    myArr3.forEach((num)=>{
        mySecondArr.push(num * 2)
    })
}())

console.log(mySecondArr);


/*
    f) Filter the contents of your mySecondArr using an anonymous function that console logs the numbers above average number (you’ll need to find the average first).
*/

const length = mySecondArr.length;
const avg = result3/length;
//console.log(avg);

mySecondArr.find((num)=>{
    if(num > avg){
        console.log(num);
    }
})


/*
    g) Use setTimeout() function. Pass it a callback function as a parameter that console logs “Goodbye” after 3 seconds.
*/
setTimeout(()=>{
    console.log('Goodbye');
}, 3000)
