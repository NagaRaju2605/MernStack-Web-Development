// Import http module
const http = require('http');

// Create server
const server = http.createServer((req, res) => {

    // Set response header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Send response to browser
    res.write("<h2>Node.js Server is Running...</h2>");
    res.write("<p>This shows JavaScript execution workflow in Node.js</p>");

    // End response
    res.end();
});

// Define port number
const PORT = 3000;

// Start server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});