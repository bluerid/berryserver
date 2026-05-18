import { Router } from 'express';

const router = Router();

// Example API route
router.get('/status', (req, res) => {
  res.json({ status: 'ok' });
});

export default router;
