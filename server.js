const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, pranav world Hello u are!\n');
});

server.listen(port, hostname, () => {
 
  const items = [1, 2, 3, 4, 5]; // Array to iterate through
let index = 0;
 
const interval = setInterval(() => {
    console.log(`Processing item: ${items[index]}`);
    index++;
 
    // Stop the loop when done
    if (index >= items.length) {
        clearInterval(interval); // Clear the interval
        console.log("Loop finished!");
    }
}, 1000); // 1 second delay
});
