# Node.js IP Address Server

This is a simple Node.js HTTP server that captures and displays the user's IP address when they visit the root route (`/`). If any other route is accessed, it will return a "Not Found" message.

## Features
- Displays the user's IP address when accessing the root route (`/`).
- Returns a "404 Not Found" for any other routes.
- Handles both IPv4 and IPv6 addresses.

## Requirements
- Node.js installed on your machine.
- `request-ip` package to extract the user's IP address.

## Installation

1. Clone this repository or create a new directory for your project.
2. Install the required dependencies using npm:
    ```bash
    npm install request-ip
    ```

## Usage

1. Create an `index.js` file with the following code:
    ```javascript
    const http = require('http');
    const requestIp = require('request-ip');

    // Create the HTTP server
    const server = http.createServer((req, res) => {
        const userIp = requestIp.getClientIp(req);

        res.setHeader('Content-Type', 'text/plain');

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
    ```

2. Start the server by running:
    ```bash
    npm start
    ```

3. Visit `http://localhost:3000/` in your browser to see your IP address. If you access any other route, you'll see the "404 Not Found" message.

## Testing Locally
If you run the server locally (on your own machine), you'll likely see `::1` or `127.0.0.1` as the IP address, which represents the localhost.

## Check Live Demo
[Node.js IP Address Server Live](https://ipaddress-find.vercel.app/)

## License
This project is open-source and available under the [MIT License](LICENSE).
