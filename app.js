const arr1 = [2, 54, 93, 66, 42, 96, 43];
const arr2 = [3, 5, 89, 10, 11, 13, 42];
const arr3 = [90, 8, 1, 1, 43, 27, 63, 33];
const arr4 = [1, 8, 3, 13, 13, 99, 202];

/* Write a function that takes in an array and console.logs the sum of
all the numbers in the array. Then call the function 4 times, passing in
one array above each time. */

const add = function(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}

console.log(add(arr1));
console.log(add(arr2));
console.log(add(arr3));
console.log(add(arr4));

const numberOfTimes = prompt('How many students do you want to see?')
const nameList = ['sally', 'sarah', 'betsy', 'sam', 'aretha', 'sun'];



/* Write a function that takes in numberOfTimes and nameList as paramaters and returns
the number of students entered in the prompt. For example if I type 2 into the prompt
the function will return `sally, sarah`. Then console.log the function to see 
the return. */

const students = function(numberOfTimes, nameList){
    let list = [];
    for(let i = 0; i < numberOfTimes.length; i++){
        list.push(nameList[i]);
    }
    return list;
}
console.log(students(numberOfTimes, nameList));

/* Create a loop inside a function that sums the number from 1 to 172, inclusively.
Save the sum in a global variable called total. Call the function.
Console.log the total. */

const addItUp = function(){
    let total = 0;
    for (let i=0; i < 172; i++){
        total +=1;
    }
}
console.log(addItUp());