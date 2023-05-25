
// // callback // Write a function that takes in an array of integers and a callback function, and returns a new array where each element is doubled using the callback.

const numbers = [1, 2, 3, 4];

function doubleNumber(num) {
  return num * 2;
}

function doubleArray(arr, callback) {
  const doubledArray = arr.map(callback);
  return doubledArray;
}

const doubledNumbers = doubleArray(numbers, doubleNumber);
console.log("New Array is: ", doubledNumbers);


// // CallBack function

function exampleCallback(name, callback) {
  const message = "Hello " + name;
  callback(message);
}

function displayCallback(msg) {
  console.log(msg);
}

// exampleCallback("Jeving", displayCallback);

// // // // Callback 
// // // 2. String Manipulation.
// // // Write a function "manipulateString" that takes in a string and converts the characters to uppercase letters. 
// // // The function should return a callback function "logString" that logs the sentence "The manipulated string is:"
// // // along with the manipulated string or the new string to the console.

const str_1 = "Hello, world!";

function manipulateString(str, callback) {
  const manipulatedStr = str.toUpperCase();
  callback(manipulatedStr);
}

function logString(manipulatedString) {
  console.log(` The manipulated string is: ${manipulatedString}`);
}

manipulateString(str_1, logString);

// // // // // 3. Age in Days.
// // // // // Write a function that takes in an array of integers and a callback function, and returns a new array where each
// // // // // Write a JavaScript function called ageInDays that accepts an object containing a person's first name, last
// // // // // name, and age in years as input. The function should concatenate the first and last name into a single string
// // // // // and store it in a variable called fullName. It should then calculate the person's age in days and store it in a
// // // // // variable called ageInDays.
// // // // // The ageInDays function should then return a callback function that logs a message to the console. The
// // // // // message should include the person's full name and age in days, and should be in the format: "The person's full
// // // // // name is [full name] and their age in days is [age in days]."
// // // // // Note that the ageInDays function should not log the message to the console directly, but should instead return
// // // // // a callback function that can be used to log the message at a later time.

const personDetails = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
}

function ageInDays(personDetails, callback) {
  const fullName = `${personDetails.firstName} ${personDetails.lastName} `;
  const ageInDays = personDetails.age * 365;
  callback(fullName, ageInDays);
}

function logAgeInDays(fullName, ageInDays) {
  console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}`);
}

ageInDays(personDetails, logAgeInDays);

// // // // 4. Arrange in alphabetical order.
// // // // Write a program that accepts a list of objects representing books [ title, author, and year] and a callback function. 
// // // // The program should use the map function to create a new list containing only the titles of the books,
// // // // and then pass this new list to the callback function. 
// // // // The callback function should then log the titles to the console in alphabetical order.

const books = [
  {
    title: "Ramayana",
    author: "Valmiki",
    year: 500,
  },
  {
    title: "The Glory of Hanuman",
    author: "Tulsidas",
    year: 1600,
  },
  {
    title: "Bhagavad Gita",
    author: "Krishna",
    year: 400,
  },
  {
    title: "Mahabharat",
    author: "Veda Vyasa",
    year: 400,
  },
  {
    title: "Atharva Veda",
    author: "Vedas of Hinduism",
    year: 1200,
  }

];

function arrangeInAlphabeticalOrder(books, callback) {

  // Use the map function to extract book titles
  const newBooks = books.map((book) => book.title);
  // Pass the sorted titles to the callback function
  callback(newBooks);
}

function logArrangeInAlphabeticalOrder(newBooks) {
  // Sort the titles in alphabetical order
  newBooks.sort();
  console.log(newBooks.join(', '));
}

arrangeInAlphabeticalOrder(books, logArrangeInAlphabeticalOrder);




// // // 5. Greeting Promise.
// // // You need to write a function that takes a name as input and returns a promise that resolves with a greeting
// // // message. The function should greet the person using their name, with a message in the format "Hello, {name}!".
// // // For example, if the input to the function is "Mithun", the promise should resolve with the string "Hello, Mithun!".

const name = "Mithun";

function greetingPromise(name) {
  return new Promise((resolve, reject) => {
    if (name === "Mithun") {
      resolve("Hello, Mithun!");
    } else {
      reject(new Error("Invalid name"));
    }
  });
}

greetingPromise(name)
  .then((greeting) => console.log(greeting))
//.catch((err) => console.log(err));
//.finally(() => console.log("Goodbye!"));

// // // //  6. Fetch results asynchronously.
// // // //  Write a function that asynchronously fetches data from an API
// // // //  [ https://jsonplaceholder.typicode.com/todos/1 ]and logs the result to the console.


async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  console.log(data);
}

fetchData();

// // // // 7. Multiple requests.
// // // // Create an asynchronous function that retrieves data from two different API endpoints: "https://jsonplaceholder.typicode.com/todos/1"
// // // // And "https://jsonplaceholder.typicode.com/posts/1".
// // // // The first API returns a to-do task, while the second API provides post details. The function should combine the results from both APIs
// // // // and log them as an object, where the keys are "todo" and "post", and the corresponding values are the
// // // // responses from the respective APIs.


async function fetchData_1() {
  const todoPromise = fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) => response.json());
  const postPromise = fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) => response.json());
  try {
    const [todo, post] = await Promise.all([todoPromise, postPromise]);
    const combinedData = {
      todo: todo,
      post: post
    };
    console.log(combinedData);
  } catch (error) {
    console.error("Error retrieving data:", error);
  }
}

fetchData_1();

// // // // 8. Get Data from API and Display it on the browser console.
// // // // Write a JavaScript program that uses the Fetch method to retrieve data from an API, and then logs the data to
// // // // the console. For example, you could use the API at https://jsonplaceholder.typicode.com/posts to retrieve a list
// // // // of posts, and then display them to the browser console.

async function fetchData_2() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error retrieving data:", error);
  }
}

// // // // 9. Error Handling
// // // // Write a JavaScript program that uses the Fetch method to retrieve data from an API, and then handles errors
// // // // that may occur. For example, you could use the API at https://jsonplaceholder.typicode.com/posts/123456789
// // // // to simulate an error, and then display an error message on the webpage.