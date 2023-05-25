function isTrianglePossible(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return false; // All sides must be positive
  }

  if (a + b > c && b + c > a && c + a > b) {
    return true; // Triangle is possible
  } else {
    return false; // Triangle is not possible
  }
}

// // Example usage:
const sideA = 7;
const sideB = 8;
const sideC = 11;

const isPossible = isTrianglePossible(sideA, sideB, sideC);

if (isPossible) {
  console.log('Triangle is possible.');
} else {
  console.log('Triangle is not possible.');
}


// // Callback function example

function greeting(name, message) {
  console.log(`Good Morning ${name} ${message}`);
}

function sayHello(callback) {
  name = "Jeving",
    message = "have a Nice Day",
    callback(name, message);
}

sayHello(greeting);


// // new function


function fetchData(callback) {
  setTimeout(function () {
    const data = 'This is some data';
    callback(data);
  }, 2000);
}

function processData(data) {
  console.log('Processing data:', data);
}

fetchData(processData);

