// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Function Signature
// input: strings √
// output: string indicating which of the two strings has more characters √

// input: "apple", "banana"
// output: "Banana has more characters than apple"

// input: "cherry", "kiwi"
// output: "Cherry has more characters than kiwi"

// Process √
// create a function called bigFruit that takes in a set of strings called fruit1, fruit2 and fruit3, fruit4
// if fruit1 has more characters than fruit2 return fruit1 has more characters than fruit2
// any other condition return fruit2 has more characters than fruit1
// if fruit3 has more characters than fruit4 return fruit3 has more characters than fruit4
// any other condition return fruit4 has more characters than fruit3
// string interpolation for the return statement


// Set one:
// const fruit1 = "apple"
// -18,6 +36,31  const fruit3 = "cherry"
// const fruit4 = "kiwi"
// // Expected outcome: "cherry"

// // Function
// const bigFruit = (value1, value2) => {
//   if(value1.length > value2.length){
//     return `${value1} has more characters than ${value2}`
//   } else if(value1.length === value2.length) {
//     return `${value1} has the same amount of characters as ${value2}`
//   } else {
//     return `${value2} has more characters than ${value1}`
//   }
// }

// console.log(bigFruit(fruit1, fruit2))
// output: banana has more characters than apple

// console.log(bigFruit(fruit3, fruit4))
// output:cherry has more characters than kiwi

// console.log(bigFruit(fruit2, fruit3))
// output: banana has the same amount of characters as cherry

// console.log(bigFruit("watermelon", "grape"))
// output: watermelon has more characters than grape

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:

// Function signature
// input: numbers
// output: it will show the desired output based on the number that is input

// input: 42
// outcome: "42 is below boiling point"

// input: 350
// output: "350 is above boiling point"

// input: 212
// output: "212 is at boiling point"

// Process:
// Create a function called waterTemp that takes in a set of numbers called temp1, temp2, and temp3. 
// Will create an argument called value and when you enter one of the three temps will produce one of the three outcomes in a string.
// Will use the following conditional statements:
// 1) If the number is 212 the outcome will be "212 is at boiling point"
// 2) If the number is higher than 212 then the outsome will be "'value' above boiling point"
// 3) An else condtion to catch all numbers lower than 212 that will produce the outcome "'value' is below boiling point"

const waterTemp = (value) => {
    if (value === 212) {
        return `${value} is at boiling point`
    } else if (value > 212) {
        return `${value} is above boiling point`
    } else {
        return `${value} is below boiling point`
    }
}
const temp1 = 42
// Expected output: "42 is below boiling point"
// console.log(waterTemp(temp1))
// outcome: "42 is below boiling point"

const temp2 = 350
// Expected output: "350 is above boiling point"
// console.log(waterTemp(temp2))
// outcome: "350 is below boiling point"

const temp3 = 212
// Expected output: "212 is at boiling point"
// console.log(waterTemp(temp3))
// output: "212 is at boiling point"

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
// Function signature
// input: arrays (numbers)
// output: the code will combine the two arrays and will return the length of the variables.

// Process: I am going to create a code that makes a variable called padresRuns that combines the two arrays into one with concat. Then I will use the .length to get the length of the variables within the new combined array.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]

var padresRuns = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
// Expected output: 9
// console.log(padresRuns.length)
// outcome: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:
// Function signature
// input: string
// output: the output should be the string "Hotel 2022" and getting it to reverse the letters into "2202 letoH"

// Process: I want to create a variable that takes the string "Hotel 2022" using .split and turns it into an array. Once I have done that I am going to create another variable that will reverse the order of the array using the reverse mutator. After, I will turn it back into a string with join.

const currentCohort = "Hotel 2022"

var splitHotel = currentCohort.split("")
var reverseHotel = splitHotel.reverse()

// console.log(reverseHotel.join(""))
// outcome: "2202 letoH"
// Expected output: "2202 letoH"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
// Function Signature
// input: number
// output: the output should be the last index of the number that is input from the array.

// Process: I will utilize the accessor .lastIndexOf to create a function called lastIndex that when I input a value from the array it will return the last index of that value.

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const lastIndex = (value) => {
    return myNumbers.lastIndexOf(value)
}
const givenValue1 = 42
// console.log(lastIndex(givenValue1))
// output: 7
// Expected output: 7

const givenValue2 = 10
// console.log(lastIndex(givenValue2))
// output: 8
// Expected output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:
// Function signature
// input: number (array)
// output: the output should sort all of the numbers in an array from largest to smallest

// Process: I will create a function called tempsSort that will use the built in method sort() to sort the numbers. Because sort turns the values of an array into a string to sort, with numbers it will be in order of first number. So I need to use a different code line to get them in the proper order from largest to smallest.

const tempSort = (value) => {
    return value.sort(function(a, b){return b-a})
}
const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// console.log(tempSort(sanDiegoSummerTemperatures))
// output: [82, 80, 79, 77, 76, 73, 72]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// console.log(tempSort(sanDiegoWinterTemperatures))
// outcome: [68, 67, 66, 66, 62, 59, 59]
// Expected output: [68, 67, 66, 66, 62, 59, 59]
