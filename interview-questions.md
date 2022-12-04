# ASSESSMENT 1: Tech Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview. If you don't know the answer a good tip is to answer a simpler version of the question.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

INSTRUCTOR EXAMPLE: What is a conditional statement?

Your answer:

Researched answer:

1. What is git? What is the difference between git and Github?

Your answer: Git is a version control system that allows you to store code on your local system. Git is accessed through the terminal in your computer. GitHub allows you to store these different versions of code in the GitHub cloud in different repositories.

Researched answer: Git is a high- quality version control system that is installed and maintained on your local system. The big thing with Git is its branching model. Branching allows you to create independent local branches of your code. GitHub is a Git repository hosting service that stores repositories in the cloud. With GitHub, branching let's you can try out new ideas or make changes to the code without affecting the main source code until you're actually ready to push your branch and merge your code to the main.

2. Which JavaScript operators will return a Boolean value?

Your answer: The JavaScript operators that return a Boolean value are Equality operators and Logical operators. They both set conditions for whether something is true or false.

Researched answer: The JavaScript operators that return a Boolean value are Equality, Relational, and Logical operators. Equality operators compare one value to the other and judge if the values equate the same thing, a Boolean value is returned. Relational operators look for a a relationship between two values, a Boolean value is returned. Logical operators (and, or, not), take two complete statements and chain them together, a Boolean operator is returned.

3. What is an index? What is the difference between index and value?

Your answer: An index is the location of a certain character/value in a string or an array. The difference between index and value is the index is the position where the value is located. The value can be string, name, number etc.

Researched answer: An index is the location of a certain character/value in a string or an array. The difference between index and value is the index is the position where the value is located. The value can be string, character, number etc, as long as it is a JavaScript data type. For example if I have an array ["Matt", "David", "Chris", "Allen"], each name or string is a value. Each of the values have an index: Matt is 0, David is 1, Chris is 2, Allen is 3.

4. Compare and contrast arrays and strings. Please include ways in which they are the same and ways in which they are different.

Your answer: Strings are characters such as letters and words. Arrays are where data like strings and numbers are grouped into. Strings can have characters, while Arrays can have strings, numbers, and characters. 

Researched answer: Strings are a collection of characters wrapped in quotation marks. Strings can contain any type of characters and as many characters as needed. There are many properties and operations that can be applied to strings, one is concatenation, which is the joining of multiple strings. Arrays are collections of ordered data. Arrays can contain any type of information as long as it's a data type JavaScript recognizes. Strings are contained within quotation marks, while Arrays are contained within closed square brackets.

5. Give a brief description of proper pair programming techniques. What are the roles of each person?

Your answer: Pair programming is when two people are working on lines of code together. The driver is the person behind the keyboard who is writing the code. The navigator is the person watching the driver's screen, it is their job to support the driver by helping them with the code and helping catch errors in the code.

Researched answer: When pair programming it is important that you take a few minutes to read through and understand the objective of the challenge. Come up with a plan on how you want to appraoch the challenge and accomplish the goal at hand. When pair programming there is two jobs: the driver and the navigator. The driver is the one with their hands on the keyboard. They are responsible for entering information and following the instructions given by the naviator. This approach takes constant communication and talking about your code will make you a better developer and a better teammate.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Higher Order Functions: In JavaScript, functions can be assigned to variables in the same way that strings or arrays can. They can be passed into other functions as parameters or returned to them as well. A higher-order function is a function that accepts functions as parameters and/or returns a function.

2. Jest: Jest is a JavaScript testing framework designed to ensure the correctness of any JavaScript codebase. It allows you to write tests with an approachable, familiar, and feature-rich application programming interface that gives results quickly.

3. Objects: JavaScript variables are containers for data values, objects are variables too but can contain many values. An object is an unordered collection of key-value pairs. Each key-value pair is called a property. The key of a property can be a string, and the value of a property can be any value e.g., a string, a number, an arry, and even a function. The name:values pairs in objects are called properties.Objects can also have methods, which are actions that can be performed on objects.

4. Method: JavaScript methods are actions that can be performed on objects. A method is a function stored as a property, they are stored in properties as function definitions. For example: Line 58 is the method.
    const person(object) = {
        name: "John".
        greet: function() { console.log("hello)}
    }

5. Classes: Classes are bits of code that encompass multiple objects, methods, and allow manipulation for its member variables and functions. Within each language, a class has different syntax and the same holds true for JavaScript. In JavaScript, a class is simply a variant of functions. Using the class functionality, you can define the constructor and the prototype functions for the member objects in one encompassing block.
