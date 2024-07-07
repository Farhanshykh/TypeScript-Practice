// Variables:

// Variables Declaration:
let userName ;

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
let strongTyping : string = "strong typed";

//Error: Type "number" is not assignable to type "string".
//strongTyping = 25 

//Primitive Types:*
    // number*: For all numeric values (both integers and floating-point numbers).
    // typescript
     let num: number = 42;
     
    // string*: For text values.
    // typescript
     let str: string = "Hello, TypeScript!";
     
    // boolean*: For true or false values.
    // typescript
     let isActive: boolean = true;
     
    // null*: Represents a null value.
    // typescript
     let nullValue: null = null;
     
    // undefined*: Represents an undefined value.
    // typescript
     let undefinedValue: undefined = undefined;
     

//Array*: For collections of values of the same type.
//typescript
   let numbers: number[] = [1, 2, 3];
   let strings: Array<string> = ["one", "two", "three"];
   

//Tuple*: For an array with a fixed number of elements of different types.
//typescript
   let tuple: [number, string] = [1, "one"];
   

//Enum: For defining a set of named constants.
//typescript
   enum Color {
     Red,
     Green,
     Blue
   }
   let color: Color = Color.Green;
   

//Any: For a variable that can hold any type of value.
//typescript
   let anything: any = 42;
   anything = "a string";
   anything = true;
   

//Void: For functions that do not return a value.
//typescript
   function logMessage(message: string): void {
     console.log(message);
   }
   

//Never: For values that never occur (used for functions that never return).
//typescript
   function error(message: string): never {
     throw new Error(message);
   }
   

//Object: For non-primitive types.
//typescript
   let obj: object = { name: "John", age: 30 };
   

//Union Types: For a variable that can hold more than one type of value.
//typescript
   let union: number | string;
   union = 42;
   union = "a string";
   

//Type Aliases: For creating custom types.
//typescript
    type StringOrNumber = string | number;
    let value: StringOrNumber;
    value = 42;
    value = "a string";

//Assignment operator:
let num1 = 5;
num1 = 7; //now the value is 7;

num1 += 4 // now the value is 11, this is the shorthand of num1 = num1 + 4:

//Comparison operators:

//5 == 2 is false
//5 != is true
//5 > 2 is true
//5 < 2 is false

//Logical operators:
// &&
// ||
// !
//(5 > 0) && (2 > 0) is true, both conditions has to be true;
//(5 < 0) || (2 > 0) is true, one need to be true;
// !(5 > 0) is false;































import inquirer from 'inquirer';

let user = await inquirer.prompt({
    type: "input",
    name: "userName",
    message: "What is your name ?",
    validate:(ans: string)=>{
        if(!ans){
            return "Please give me your answer"
        }
        return true
    }
})
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

let total : number = input1.num1 + input2.num2;
console.log(total);

let weightInKg : number = 70;
let heightInMeters : number = 1.75;
let bmi = weightInKg / (heightInMeters * heightInMeters);

console.log(`your bmi is ${bmi}`);


