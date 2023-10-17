const WebSocket = require('ws');
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('WebSocket server running\n');
});

// Create a WebSocket server by passing the HTTP server
const wss = new WebSocket.Server({ server });

// Handle WebSocket connections
wss.on('connection', (ws) => {
  console.log('WebSocket client connected');

  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
    ws.send(`You sent: ${message}`);
  });
});

// Start the HTTP server on port 8080
server.listen(8080, () => {
  console.log('Server listening on http://localhost:8080');
});
