// /// // /// First Code

const fs = require('fs');

// console.log('Start Reading:');

// fs.readFile('node/index-1.txt', function(err, data) {
//     if(err) {
//         console.log('Error',err);
//     }
//     console.log('Data: ', data.toString());
//     console.log('Done Reading:');
// });

// console.log('Other Stuff');


// /// // /// Second Code



console.log("------------------------------  Start Reading --------------------------------------");
const data = fs.readFileSync('node/index-2.txt');
console.log("Data: " , data.toString());
console.log("------------------------------  End Reading --------------------------------------");