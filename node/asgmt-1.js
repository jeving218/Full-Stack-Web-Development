// In this coding challenge, your task is to create a package&json file for your project using the npm init
// command& The package&json file is essential for managing dependencies, scripts, and other project"related
// details& Below is the expected folder structure

// R% In the same project directory created in the above assignment, your task is to create a new file index&js and
// using the fs module add information about Node&js architecture to a new file node/nodejs_architecture&txt& Below
// are the expected files in the project folder

// Y% Continuing assignment 2& Here, let’s create a new file named index&js and use the fs module to read the
// content of node/nodejs_architecture&txt and print the content to the console

// % In this coding challenge, you will continue working with the file created in the previous assignments& Here
// your task is to access the existing node/nodejs_architecture&txt file and use the fs module to append additional
// data to it& Specifically, add some advantages of Node&js to the file and print the file content to the console

// % To wind up the fs module walk"through challenges, let’s delete the node/nodejs_architecture&txt file& On deletion
// print "File Deleted SuccessFully" to the console%
// % Assume a situation where our server restricts access to its configuration via the user interface& The only way
// to obtain the OS and release information is through a programmatic approach& In this challenge, you are
// expected to use the os module and print the os name and the os"release version to the console&
// Assignment

// Full Stack Web Development

// ?0 In this challenge, you are required to use Node1js and the built-in HTTP module to create a server that
// displays the text "I Am Happy To Learn Full Stack Web Development From PW Skills!" on the browser screen1
// The goal is to utilize the HTTP module to create an HTTP server, set the port, appropriate content type, and
// send the message as a response to the client's request, allowing it to display on the browser1

// F0 Let's simulate a subscription feature similar to YouTube1 Using the events module, we'll create a custom
// event named "subscribe"1 When this event is triggered, it should display a message in the console indicating
// that the user has subscribed1

// 0 While working with the events module, one interesting observation is that when an event is created and
// called, the associated event handler is triggered1 However, what happens if we remove an event and then
// try to call it? In this coding challenge letes create an event handler and call it1 Later letes remove the event
// handler and observe what happens when we call it0
// du0 In continuation of the 8th question, let's now explore the concept of the maximum number of listeners
// allowed for event handlers1 For this coding challenge, your task is to determine the current maximum
// number of event listeners associated with an event and then set the maximum number of event listeners to
// 51 Note that the default maximum number of listeners might vary1 Your task is to limit the number of listeners
// to 5
//////// 1 
const fs = require('fs');

const architectureInfo = 'This is information about Node.js architecture.';

fs.writeFile('node/nodejs_architecture.txt', architectureInfo, (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('Node.js architecture information added to file.');
});


/////// 2
// const fs = require('fs');

fs.readFile('node/nodejs_architecture.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('Content of node/nodejs_architecture.txt:');
  console.log(data);
});


////////3
//const fs = require('fs');

const advantages = '\nAdvantages of Node.js: \n- Non-blocking and event-driven\n- Fast and scalable\n- JavaScript on both front-end and back-end';

fs.appendFile('node/nodejs_architecture.txt', advantages, (err) => {
  if (err) {
    console.error('Error appending to file:', err);
    return;
  }
  console.log('Advantages added to node/nodejs_architecture.txt.');
});




////////////4
////const fs = require('fs');

fs.unlink('node/nodejs_architecture.txt', (err) => {
  if (err) {
    console.error('Error deleting file:', err);
    return;
  }
  console.log('File Deleted Successfully');
});




////////////5
const os = require('os');

console.log('OS Name:', os.type());
console.log('OS Release Version:', os.release());



const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('I Am Happy To Learn Full Stack Web Development From PW Skills!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// 
const EventEmitter = require('events');

const customEmitter = new EventEmitter();
