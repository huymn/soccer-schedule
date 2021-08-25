const http = require('http');
const fs = require('fs');

//CONST VARIABLE
const HOSTNAME = 'localhost';   //Name of website
const PORT = 5000;              //Port number of website

//Request to render html to server
const handleRequest = (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('./index.html', null, function (err, data) {
        if (err) {
            res.writeHead(404);
            res.write('File not found!');
        }
        else {
            res.write(data);
        }
        res.end();
    })
}

//Create the server from the request
const server = http.createServer(handleRequest);

//Listen to the port
server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});