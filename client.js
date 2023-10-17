const WebSocket = require('ws');

// Replace 'ws://localhost:8080' with the address of your WebSocket server
const ws = new WebSocket('ws://localhost:8080');

// Handle WebSocket connection events
ws.on('open', () => {
  console.log('WebSocket client connected');
  ws.send('Hello, server!');
});

ws.on('message', (message) => {
  console.log(`Received: ${message}`);
});

ws.on('close', () => {
  console.log('WebSocket connection closed');
});
