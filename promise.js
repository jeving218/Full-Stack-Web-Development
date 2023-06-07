// function timeCounsuming(){
//     for(let i = 0; i <1000000000;i++) {
//         // console.log("HEY!");
//     }
// }
// console.log("Starting");
// timeCounsuming();
// console.log("Starting Time Counsuming Function");
// setTimeout(function exc(){
//     console.log("Timer expired 1st");
// }, 1000);
// setTimeout(function exc(){
//     console.log("Timer expired 2nd");
// }, 1111);
// console.log("Ending Time Counsuming Function");
// console.log("Ending");


// // // // // Promise Function
// function returnPromise() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             console.log("Timmer Completed");
//             let randomValue = Math.random();
//             console.log(`Random value is ${randomValue}`)
//             if (randomValue > 0.5) {
//                 if (randomValue > 0.8 && randomValue < 1) {
//                     resolve("Done 2nd attempt");
//                 }
//                 else {
//                     resolve("Done 1st iteration");
//                 }
//             }
//             else {
//                 reject("Rejected");
//             }
//         }, 1000);
//     })
// }

// let p = returnPromise();
// p
//     .then(function exc(val) {
//         console.log("Resolved Using", val);
//     })
//     .catch(function exc(err) {
//         console.log("Rejected Using", err);
//     })
//     .finally(function fin() {
//         console.log("Finally");
//     })

// console.log("End ");


// // // 2nd Example of Promise
// function sayMessage() {
//     const message = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve("Hello ");
//         },2000);
//         setTimeout(function () {
//             resolve("World");
//         },4000);

//     })
//     return message;
// }

// let s =  sayMessage()
// s
// .then(function exec(msg){
//     console.log(msg);
// })
// .catch(function exec(err){
//     console.log(err);
// })


// const newProise = new Promise(function (resolve, reject) {
//     let err = true;
//     if (!err) {
//         resolve("Hello world!");
//     }
//     else {
//         reject("Error: " + err);
//     }
// })

// newProise
//     .then(
//         function (val) {
//             console.log(val);
//         }
//     )
//     .catch(function (err) {
//         console.log(err);
//     })



const promiseFunction = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let err = false;
        if (!err) {
            resolve("Book already in progress");
        }
        else {
            reject("Error: Book not Found");
        }

    }, 1000)
});

async function getBook() {
    console.log("Before await");
    const response = await promiseFunction
    console.log("After await");
    console.log(response);
}
getBook();


function updateBook(){
    console.log("Book updated");
}
updateBook();

function deleteBook(){
    console.log("Book deleted");
}
deleteBook();
