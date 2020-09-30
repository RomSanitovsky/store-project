
const fs = require('fs');
const http = require('http');
const url = require('url');
// const text=fs.readFileSync('./txt/input.txt','utf-8');
// console.log(text);
// fs.writeFileSync('./txt/output.txt',`this is the text:\n${text}`);

const server = http.createServer((req , res) =>
{
    console.log('start');
    res.end('hello from the server');
});

// This is a test

server.listen(8000,"127.0.0.1", ()=>
{
    console.log('lisening... Raz The nigga');
});
