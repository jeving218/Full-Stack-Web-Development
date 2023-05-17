arr = [1, 3, 5]

arr.forEach((element, index, arr) => {
    console.log(element, index, arr);
});

arr.forEach(function (element, index, arr) {
    console.log("function:", element, index, arr);
})


namearr = ['jeving', 'bittu', 'ankit', 'vishwas', 'maulik']
namearr.forEach((element) => {
    console.log(element.toUpperCase());
});

console.log(namearr);

const namewithn = namearr.filter((h) => {
    return h.endsWith("g")
})

console.log(namewithn);


// CartBill

cart = [100, 21, 90]

const sumoOfCart = cart.reduce((pre, curr) => pre + curr, 0)
console.log(sumoOfCart);


//Check all the number of list is numbers

score = [100, 21, 90, 1121, 200, 300, 400, 500, 600, 700]
const checkScore = score.every((v) => typeof v === 'number')

console.log(checkScore);

// Check vale of score greater than the number

const checkScoreAbove200 = score.find((v) => v > 200)

console.log(checkScoreAbove200);


// Use of the regular expression

let pettern = 'pw'
let regOne = new RegExp(pettern)

let flag = 'gi'
let regTwo = new RegExp(pettern, flag)

let regThree = /pw/gi

const strToCheck = "PW is growing at a rapid speed and recently they are working on Pwskills to create skills based pwcontent"

console.log("Regular Expression One:",regOne.test(strToCheck));

console.log("Regular Expression Two:",regTwo.test(strToCheck));

console.log("Regular Expression Three:",regThree.test(strToCheck));

// another result

const  anotherResult = strToCheck.match(regThree);
console.log(anotherResult);

// replace the the word

const replaceWord = strToCheck.replace(regThree, "P-W");
console.log(replaceWord);

// find pattern and replace it

const webUrl = "http://jeving%20trapsiya"
const replacePattern = webUrl.replace(/%\d0/,'-')
console.log(replacePattern)