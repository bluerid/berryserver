import { Router } from 'express';

const router = Router();

// Home route
router.get('/', (req, res) => {
  res.send('Welcome to the home page');
});

export default router;
