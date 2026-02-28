// Import http module
const http = require('http');

// Create server
const server = http.createServer((req, res) => {

    if (req.method === "GET") {
        // Sending data to client
        res.writeHead(200, { 'Content-Type': 'application/json' });

        const data = {
            name: "Nagaraju",
            course: "Node.js",
            message: "Data transferred successfully using HTTP"
        };

        res.end(JSON.stringify(data));
    }

    else if (req.method === "POST") {
        let body = "";

        // Receive data from client
        req.on("data", chunk => {
            body += chunk.toString();
        });

        req.on("end", () => {
            console.log("Received Data:", body);

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end("Data received successfully");
        });
    }
});

// Run server on port 4000
server.listen(4000, () => {
    console.log("Server running at http://localhost:4000");
});