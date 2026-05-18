import express from 'express';
import homeRouter from './routes/home.js';
import apiRouter from './routes/api.js';
import usersRouter from './routes/users.js';

class App {
  constructor() {
    this.app = express();
    this.configure();
  }

  configure() {
    // Middleware
    this.app.use(express.json());

    // Register route groups
    this.app.use('/', homeRouter);
    this.app.use('/api', apiRouter);
    this.app.use('/users', usersRouter);
  }

  getApp() {
    return this.app;
  }
}

export default App;
