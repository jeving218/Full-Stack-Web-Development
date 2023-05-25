// // // Asynchronous function using async/await
// async function greetUser() {
//     const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

//     console.log("Preparing to greet...");

// //     // Simulating an asynchronous operation with a delay
//     await delay(2000);

//     console.log("Hello, user!");
// }

// // // Calling the asynchronous function
// greetUser();

function welcomeUser() {
    console.log("Welcome, user!");
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous operation with a delay
        setTimeout(() => {
            console.log("Hello, user!");
        }, 2000);
        resolve("Done");
    })
}

async function consume() {
    console.log("Starting");
    const response1 = await welcomeUser();
    console.log("This is a Response from the Async Function", response1);

}

consume();
console.log("Ending");

