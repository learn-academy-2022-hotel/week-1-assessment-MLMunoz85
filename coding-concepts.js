// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2022"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: 10, this is because it is taking the length of the string. LEARN is 5 characters, "_" is one, and 2022 is 4, which makes 10.

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: o, this is because it is taking the index of the string. When looking for the index of 4, you need to count the strting with 0 for the first character, so after counting 5 characters you find the index of 4 which is "o".

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: "Ruby"
// b) Verify and explain: "Ruby", this is because it is looking for the index of 1 in the array. When counting the index of strings in this array each string/value is one index. JavaScript is 0, Ruby is 1, Python is 2, C++ is 3.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: "SATURDAY" "SUNDAY"
// b) Verify and explain: Error, this is because toUpperCase is a built-in method for strings and not for arrays, you would need to turn the array into a string for toUpperCase to work.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
// console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: Number, this is because it is taking the length of the array dataTypes which produces a number, the typeof of a number is a number.
