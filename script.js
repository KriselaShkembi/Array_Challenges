console.log("1. Always Hungry")
var arr = [3.14, "food", "pie", true, "food"]
var arr1 = [1,2,3,4,5]
function alwaysHungry(arr){
    var eat = false; 
    for(i=0; i<= arr.length; i++)
        if(arr[i]=="food"){
            eat = true;
            console.log("yummy")
        }
        if(!eat){
            console.log("I'm hungry")
            }
}
alwaysHungry(arr)
alwaysHungry(arr1)

console.log("2. High Pass Filter")
function highPass(arr, cutoff) {
    var filteredArr = [];
    for(i=0; i<=arr.length; i++){
        if(arr[i] > cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr.sort((a,b) => a - b);
}
var result = highPass([6,8,3,10,-2,5,9],5);
console.log(result);

console.log("3. Better than average")
function betterThanAverage(arr) {
    var sum = 0;
    var total
    var avr
    for(i=0; i<arr.length; i++){
        sum += arr[i];
        }
    avr = sum / arr.length;
    
    var count = 0;
    for(i=0; i<=arr.length; i++){
        if(arr[i]>avr) {
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6,8,3,10,-2,5,9]);
console.log(result);

console.log("4. Array Reverse")
function reverse(arr) {
    arr.reverse();
    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);

console.log("5. Fibonacci Array")
function fibonacciArray(n) {
    var fibArr = [0, 1];
    var newNr
    for(i=1; i<n-1; i++) {
        newNr = fibArr[i-1]+ fibArr[i];
        fibArr.push(newNr); 
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result);