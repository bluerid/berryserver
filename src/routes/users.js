import { Router } from 'express';

const router = Router();

// Users route
router.get('/', (req, res) => {
  res.json({ message: 'Users endpoint' });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id, name: `User ${id}` });
});

export default router;
