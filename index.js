// Import necessary modules
const http = require('http');
const requestIp = require('request-ip');

// Create the HTTP server
const server = http.createServer((req, res) => {
    // Get the IP address of the user
    const userIp = requestIp.getClientIp(req);

    // Set headers
    res.setHeader('Content-Type', 'text/plain');
    
    // Handle different routes
    if (req.url === '/') {
        res.statusCode = 200;
        res.end(`Your IP address is: ${userIp}`);
    } else {
        res.statusCode = 404;
        res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
