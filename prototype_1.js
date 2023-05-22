// let myHeros = ["IronMan", "Thor", "SpiderMan"]
// let dcHeros = ["Batman", "Flash", "Superman"]

// let myHeroes = myHeros.concat(dcHeros)
// console.log(myHeroes);

// let heroPower = {
//     IronMan: "Technology",
//     Thor: "Hammer",
//     SpiderMan: "Sling",

//     getSpiderManPower: function () {
//         console.log(`SpiderMan Power is : ${this.SpiderMan}`);
//     }

// }
// // // clalling spiderman power
// heroPower.getSpiderManPower();
// Object.prototype.jeving = function () {
//     console.log("Jeving is in all objects");
// }

// console.log("myHeroes calling object : ",myHeroes.jeving);
// console.log("myHeroes calling Function :  ",myHeroes.jeving());
// console.log("heroPower calling Function : ",heroPower.jeving());

// Array.prototype.heyJeving = function () {
//     console.log("Jeving is in all Arrays");
// }

// console.log("myHeroes calling Function :",myHeroes.heyJeving());
// console.log("heroPower calling Function : ",heroPower.heyJeving());


// // // use of __proto__

const Teacher = {
    makevideo: true
};

const TeachingSupport = {
    isAvailable: true,
};

const TAAssistance = {
    makeAssignment: true,
    fullTime: true,
    __proto__: TeachingSupport,
};

console.log(TAAssistance);
console.log(TAAssistance.isAvailable);

// console.log(TAAssistance);
// console.log(TeachingSupport);

// // // String.prototype.trim
String.prototype.trimlength = function () {
    console.log(`the length of the string is: ${this.trim().length}`);
}

console.log("jeving.         ".trimlength());