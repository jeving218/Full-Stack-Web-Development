// // // clouser

const c1 = "I am a outer clouser";
function one() {
    const c1 = "I am a First inner clouser";
    console.log(c1);
}

function two() {
    const c1 = "I am a Second inner clouser";
    console.log(c1);
}
function three() {
    const c1 = "I am a Third inner clouser";
    console.log(c1);
}

one()
two()
three()
console.log(c1);

// // // Inside the function body

function outerFunc() {
    let outerValue = "I am outer function";
    function innerFunc() {
        let innerValue = "I am inner function";
        console.log(outerValue);
        function innerofInnerFunc() {
            let innerofinnerValue = "I am inner of inner function";
            console.log(innerValue);
        }
        innerofInnerFunc();
    }
    innerFunc();
}
outerFunc();

// // // closer function

// const errorMessage = "File not found";

// setTimeout(function callBack(){
//     console.log(errorMessage);
// },1000 )


// // // closer 2nd example


let viewCount = 0;
let item = [10,22,34,42];

item.forEach(function iterator(num) {
    viewCount++;
    console.log(num);
})

console.log("View Count: " ,viewCount);