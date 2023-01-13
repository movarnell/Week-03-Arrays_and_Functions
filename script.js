
/* Problem 1. 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array 
•	Do not use numbers to reference the last element, find it programmatically, 
•	ages[7] – ages[0] is not allowed!
*/


let array1 = [ 3,9,23,64,2,8,28,93];
console.log(array1[array1.length - 1]);

/* 1b.	Add a new age to your array and repeat the step above to ensure it 
 is dynamic. (works for arrays of different lengths). */

array1.push(53);
console.log(array1[array1.length - 1]);
// alternate code for this is commented below this
// const lastElement = array1.findLast((element) => element);
// console.log(lastElement);


// 1c.	Use a loop to iterate through the array and calculate the average age. 
// this for...of loop goes through the array to get a total sum, then 
// finds the average of the numbers in the array.
let total = 0;
for(let i of array1) {
    total += i;
}
let avg = total / array1.length;
console.log(avg);


// 2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
// 2a.	Use a loop to iterate through the array and calculate the average number of letters per name. 

// this loop will find the lengths of the strings and then will
// find the average length of the names. 
let namesArray = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let nameLengths=[];
let lengthTotal = 0;

for(let i of namesArray){
    stringLength = i.length;
    lengthTotal += i.length;
    // console.log(lengthTotal);
nameLengths.push(stringLength);
}
let average = lengthTotal/nameLengths.length;
console.log(average);
//console.log(nameLengths);


// 3. How do you access the last element of any array? -- Two examples are listed one in 
// line 10 and one commented out in line 18. I use the line 18 method on line 55 to answer this.
console.log(namesArray.findLast((element) => element)); //allows us to get the last element

// 4. How do you access the first element of any array?
// to access the first element in an array you can use the direct reference
console.log(namesArray[0]);

/* 5. Create a new array called nameLengths. Write a loop to iterate over the previously
created names arrasy and add the length of each name to the nameLengths array.
*/
// in the previous code listed on line 39 and done in the loop following we do problem #5.

// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the
// elements in the array. **This was also done in the above loop. 

// 7. Write a function that takes two parameters, word and n, as arguments and returns the
// word concantenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I 
// would expect the funtion to return 'HelloHelloHello').

function repeater(word, n){
    let newString = "";
    for (i=0; i < n; i++){
        newString += word;
    }
return newString;
}
console.log(repeater("hello", 3));

// 8.	Write a function that takes two parameters, firstName and lastName, and returns 
// a full name. --> The full name should be the first and last name separated by a space.

function fullName(firstName, lastName){
    return firstName + " " + lastName;
}
console.log(fullName("Michael", "Varnell"));


// 9. Write a function that takes an array of numbers and returns true if the sum of all the 
// numbers in the array is greater than 100.

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

// 10.	Write a function that takes an array of numbers 
// and returns the average of all the elements in the array.

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
// if the average of the elements in the first array is greater
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
// BELOW ARE MY TEST CASES
console.log(greaterArrayAverage(array5, array6)); // should return false
console.log(greaterArrayAverage(array6, array5)); // should return true


// 12. Write a function called willBuyDrink that takes a boolean 
// isHotOutside, and a number moneyInPocket, and returns true
// if it is hot outside and if moneyInPocket is greater than 10.50

function willBuyDrink(isHotOutside, moneyInPocket){
    if (isHotOutside == true && moneyInPocket > 10.50){
        return true;
    } else {
        return false;
    }
}
// BELOW ARE MY TEST CASES
console.log(willBuyDrink(false, 10.6)); //should return false
console.log(willBuyDrink(false, 10.4)); //should return false
console.log(willBuyDrink(true, 10.4));  // should return false
console.log(willBuyDrink(true, 10.6));  // should return true



// 13. Create a function of your own that solves a problem. 
// --> In comments, write what the function does and why you created it.

// I needed a way to input names, and ensure that a random name was drawn and to 
// demonstrate it in front of people so that they knew it wasn't rigged. 
// The following funtion allowed me to do just that, with the ability to run it easily over
// and over again with truly random results. I used the namesArray from the earlier as 
// my data set. 

function randomDraw(array){
    randomValue = Math.floor(Math.random() * array.length);
    return array[randomValue];
}
console.log(randomDraw(namesArray));

