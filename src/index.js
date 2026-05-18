// src/index.js
// entry point

import Server from './server.js';

const server = new Server();
server.start();

// Graceful shutdown
process.on('SIGINT', () => server.shutdown('SIGINT'));
process.on('SIGTERM', () => server.shutdown('SIGTERM'));
