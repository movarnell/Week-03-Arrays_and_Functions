
/* Problem 1. 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array 
•	Do not use numbers to reference the last element, find it programmatically, 
•	ages[7] – ages[0] is not allowed!
*/


let array1 = [ 3,9,23,64,2,8,28,93];
let problem1 = array1.findLast((element) => element) - array1[0];
console.log(problem1);

//1b.	Add a new age to your array and repeat the step above to ensure it 
//is dynamic. (works for arrays of different lengths).

array1.push(53);
problem1 = array1.findLast((element) => element) - array1[0];
console.log(problem1);
// it is dynamic. 

// this for...of loop goes through the array to get a total sum, then 
// finds the average of the numbers in the array. 
let total = 0;
for(let i of array1) {
    total += i;
}
let avg = total / array1.length;
console.log(avg);

// this loop will find the lengths of the strings and then will
// find the average length of the names. 
let namesArray = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let nameLengths=[];
let lengthTotal = 0;

for(let i of namesArray){
    stringLength = i.length;
    lengthTotal += i.length;
    //console.log(lengthTotal);
nameLengths.push(stringLength);
}
let average = lengthTotal/nameLengths.length;
console.log(average);
//console.log(nameLengths);

// how do you access the last element of any array?
console.log(namesArray.findLast((element) => element)); //allows us to get the last element
// to access the first element in an array you can use the direct reference
console.log(namesArray[0]);

// the next loop will concantenate all the names together separated
// by spaces
let allNames="";
for(let i of namesArray){
 allNames += i + " ";
}
console.log(allNames);

//above I used a seperate array for the lengths of the names and 
// got the sum , but here it is again.
/*
let namesArray = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let nameLengths=[];
let lengthTotal = 0;

for(let i of namesArray){
    stringLength = i.length;
    lengthTotal += i.length;
    console.log(lengthTotal);
nameLengths.push(stringLength);
}
let average = lengthTotal/nameLengths.length;
console.log(average);
*/

function repeater(word, n){
    let newString = "";
    for (i=0; i < n; i++){
        newString += word;
    }
return newString;
}
console.log(repeater("hello", 4));

// function to return first and last name separated by space. 
function fullName(firstName, lastName){
    return firstName + " " + lastName;
}
console.log(fullName("Michael", "Varnell"));

// function that takes an array of numbers and returns true
//if the sum of all the numbers in the array is greater than 100
// referencing the first array for my test
function hundredValidator(array){
    totalOfArray = 0;
    for (let i of array){
        totalOfArray += i;
    }
    if (totalOfArray >=100){
        return true;
    } else {
        return false;
    }
}
console.log(hundredValidator(array1));

// Write a function that takes an array of numbers and 
// returns the average of all the numbers in the array

function averageOfArray(array){
    totalOfArray = 0;
    for(let i of array){
        totalOfArray += i;
    }
    let answer = totalOfArray/array.length;
    return answer;
}
// used array 1 again to test functionality
console.log(averageOfArray(array1));

// 11.	Write a function that takes two arrays of numbers and returns true 
//if the average of the elements in the first array is greater
// than the average of the elements in the second array.

let array5 = [4,5,6];
let array6 = [5,6,7];

function greaterArrayAverage(arrayA,arrayB){
    arrayATotal = 0;
    arrayBTotal = 0;

    arrayAAverage = 0;
    arrayBAverage = 0;

    for (let i of arrayA){
        arrayATotal += i;
    }
    arrayAAverage = arrayATotal/arrayA.length;

    for (let i of arrayB){
        arrayBTotal += i;
    }
    arrayBAverage = arrayBTotal/arrayB.length;
    if(arrayAAverage >= arrayBAverage){
        return true;
    } else {
        return false; 
    }

}
console.log(greaterArrayAverage(array5, array6));

// Write a function called willBuyDrink that takes a boolean 
// isHotOutside, and a number moneyInPocket, and returns true
// if it is hot outside and if moneyInPocket is greater than 10.50

function willBuyDrink(isHotOutside, moneyInPocket){
    if (isHotOutside == true && moneyInPocket > 10.50){
        return true;
    } else {
        return false;
    }
}
//console.log(willBuyDrink(false, 10.6)); //should return false
//console.log(willBuyDrink(false, 10.4)); //should return false
//console.log(willBuyDrink(true, 10.4));  // should return false
console.log(willBuyDrink(true, 10.6));  // should return true

// write a function of your own that solves a problem
// this function takes in an array and generates a random name for a drawing.

function randomDraw(array){
    randomValue = Math.floor(Math.random() * array.length);
    return array[randomValue];
}
console.log(randomDraw(namesArray));

