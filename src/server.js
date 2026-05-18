import { config } from './config/index.js';
import App from './app.js';

class Server {
  constructor() {
    this.port = config.port;
    this.app = new App().getApp();
    this.server = null;
  }

  start() {
    try {
      this.server = this.app.listen(this.port, () => {
        console.log(`Server is running on port ${this.port}`);
      });
    } catch (err) {
      console.error('Failed to start server:', err);
      process.exit(1);
    }
  }

  shutdown(signal) {
    console.log(`${signal} received, shutting down gracefully...`);
    if (this.server) {
      this.server.close(() => {
        console.log('Closed out remaining connections');
        process.exit(0);
      });
    } else {
      process.exit(0);
    }
  }
}

export default Server;