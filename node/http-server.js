const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url =='/' ){
        res.write("<h1> Hello User! </h1>");
    }

    if (req.url =='/about' ){
        res.write("<h1> About Us </h1>");
    }
    res.end();
});

server.listen(8000);
console.log("server listening on port 8000");