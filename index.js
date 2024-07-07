// Variables:
// Variables Declaration:
let userName;
// Variables Assignment:
userName = "farhan";
//Variable Reassignment:
userName = "farhan yaseen";
// Variable Call:
console.log(userName);
//Case Sensitive:
//Camel Case:
let myVariable;
//Snake Case
let my_variable;
//Pascal Case:
let MyVariable;
//Strong Typing:
// Strong typing ensures that variables are explicity defined, reducing errors and enhancing code readibility
let strongTyping = "strong typed";
//Error: Type "number" is not assignable to type "string".
//strongTyping = 25 
//Primitive Types:*
// number*: For all numeric values (both integers and floating-point numbers).
// typescript
let num = 42;
// string*: For text values.
// typescript
let str = "Hello, TypeScript!";
// boolean*: For true or false values.
// typescript
let isActive = true;
// null*: Represents a null value.
// typescript
let nullValue = null;
// undefined*: Represents an undefined value.
// typescript
let undefinedValue = undefined;
//Array*: For collections of values of the same type.
//typescript
let numbers = [1, 2, 3];
let strings = ["one", "two", "three"];
//Tuple*: For an array with a fixed number of elements of different types.
//typescript
let tuple = [1, "one"];
//Enum: For defining a set of named constants.
//typescript
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let color = Color.Green;
//Any: For a variable that can hold any type of value.
//typescript
let anything = 42;
anything = "a string";
anything = true;
//Void: For functions that do not return a value.
//typescript
function logMessage(message) {
    console.log(message);
}
//Never: For values that never occur (used for functions that never return).
//typescript
function error(message) {
    throw new Error(message);
}
//Object: For non-primitive types.
//typescript
let obj = { name: "John", age: 30 };
//Union Types: For a variable that can hold more than one type of value.
//typescript
let union;
union = 42;
union = "a string";
let value;
value = 42;
value = "a string";
import inquirer from 'inquirer';
let user = await inquirer.prompt({
    type: "input",
    name: "userName",
    message: "What is your name ?",
    validate: (ans) => {
        if (!ans) {
            return "Please give me your answer";
        }
        return true;
    }
});
console.log(user);
const input1 = await inquirer.prompt({
    name: "num1",
    type: "number",
    message: "Enter our first no."
});
const input2 = await inquirer.prompt({
    name: "num2",
    type: "number",
    message: "Enter your second no."
});
let total = input1.num1 + input2.num2;
console.log(total);
let weightInKg = 70;
let heightInMeters = 1.75;
let bmi = weightInKg / (heightInMeters * heightInMeters);
console.log(`your bmi is ${bmi}`);
