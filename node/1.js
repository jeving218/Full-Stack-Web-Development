// /// // /// First Code

const { log } = require('console');
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



// console.log("------------------------------  Start Reading --------------------------------------");
// const data = fs.readFileSync('node/index-2.txt');
// console.log("Data: " , data.toString());
// console.log("------------------------------  End Reading --------------------------------------");


const buf= new Buffer(1024);

fs.open('node/index-2.txt'  , 'r+', function(err,fd){
    if (err){
        console.log("Error in Openig file" );
    } 
    else{
        console.log("Success in Openig file" );

    }

    fs.read(fd,buf, 0, buf.lenth, 0 ,function(err, bytes) {
        if(err) {
            console.log('Error in reading File');
        }
        console.log('Success in reading File');
        console.log('Data:',buf.slice(0,bytes).toString());

        fs.close(fd, function(err){
            if(err) {
                console.log('Error in closing');
            }
            else{
                console.log('Success in closing');
            }

        });
    });
});





// fs.appendFile('node/index-2.txt'  , ' -- Jeving', 'utf-8', function(err){
//     if (err){
//         console.log("Error in Appending file" );
//     } 
//     else{
//         console.log("Success in Appending file" );

//     }
// });