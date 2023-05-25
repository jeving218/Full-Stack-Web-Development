// // 01. Write a function called "addNumbers" that takes two numbers as arguments and returns their sum. 
// // Call the function before it is declared to demonstrate hoisting.

console.log("addNumbers is calling: ", addNumbers(10, 20));
function addNumbers(num1, num2) {
    return num1 + num2;
}


// // // 02. Write a function called "multiplyNumbers" that takes two numbers as arguments and returns their
// // // product. Use function expressions to define the function and call the function before it is declared to
// // // demonstrate hoisting.

console.log("multiplyNumbers is Calling: ", multiplyNumbers(10, 20));
function multiplyNumbers(num1, num2) {
    return num1 * num2;
}

// // 03. Write a function that takes two numbers as arguments and returns their sum. Declare a variable inside
// // the function using the var keyword and log its value to the console before it is assigned a value to
// // demonstrate variable hoisting.

console.log("addNumbers is Calling : ", addNumbers_2(10, 20));
function addNumbers_2(num1, num2) {
    console.log("sum: ", sum);
    var sum = num1 + num2;
    return sum;
}

// // // 04. Declare three variables, one using let, one using var, and one using const, all inside a block scope. 
// // // Assign them values and log their values to the console before and after they are declared to demonstrate variable
// // // hoisting.

{
    // console.log("From Block Scope before Declaring:: ", x);
    // console.log("From Block Scope before Declaring:", y);
    // console.log("From Block Scope before Declaring:", z);

    let x = 10;
    var y = 30;
    const z = 40;

    console.log("From Block Scope After Declaring: ", x);
    console.log("From Block Scope After Declaring:", y);
    console.log("From Block Scope After Declaring:", z);

}

// // // 05. Declare a variable using let inside a block scope and attempt to log its value to the console before it is
// // // assigned a value to demonstrate the temporal dead zone.

{
    // console.log(z); // // //    ReferenceError: Cannot access 'z' before initialization
    let z = "Hi there";
    console.log(z);

}