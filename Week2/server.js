// const http = require('http');
// http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'
//     });
//     res.end('Hello World');
//     }).listen(3000);
// console.log('Server running at http://localhost:3000/');

//=======================================================
const connect = require('connect');
const app = connect();

function logger(req, res, next){
    console.log(req.method, req.url);
    next();
}

function helloWorld(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World Again');
};

function goodbyeWorld(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Goodbye World Again');
};

function notFound(req, res, next) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
};

app.use(logger);
app.use('/hello',helloWorld);
app.use('/goodbye',goodbyeWorld);
app.use(notFound); // The notFound middleware will handle any other requests

app.listen(3000); // Starts the server

console.log('Server running at http://localhost:3000/');
