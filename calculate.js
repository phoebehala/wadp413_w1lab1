/*
    a) Create an arrow function named “mySum”. 
        Your function should accept an arbitrary number of arguments using the REST operator.
        Your function should return the sum of all of its inputs.
 */
function getSum(total, num){
    return total + Math.round(num);
}

const mySum = (...args)=>{
    //args.forEach(arg => console.log(arg))
    const totalSum = args.reduce(getSum, 0)
    
    //console.log(`the total sum is ${totalSum}`);
    return totalSum;
}




/*
    b) Put this function in a different module and export it. Then, in this module, import the module that contains your function and call it from this module.
*/

module.exports = mySum;


