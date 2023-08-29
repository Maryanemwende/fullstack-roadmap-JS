//create a boolean varibale called 'myBoolean' and set it to 'true'
const myBoolean = true;

//create a string called 'myString' and set it to 'hello world'
const myString = 'hello world';

//create a number varibale called 'firstNumber' and set it equal to '20'
const firstNumber = 20;

//create another variable called 'secondNumber' and set it to '40'
let secondNumber;
secondNumber = 40;

//reassign 'secondNumber' and set it equal to '80'
secondNumber = 80;

//create an array called 'myArray' and put 'myBoolean' at index 0, and 'myString' at index 1
const myArray = [myBoolean, myString];

//Object
const myObject = {
    firstProperty: myArray,
    sumProperty: firstNumber + secondNumber
};

//print myObject to the console
console.log(myObject);

//print the sumProperty of myObject to the console
console.log(myObject.sumProperty);

//print the value at index 1 of 'firstProperty'
console.log(myObject.firstProperty[1]);