import { Router } from 'express';
import { Patient } from '../models/Patient';

const router = Router();

let users: Patient[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com' }
];

// GET all users
router.get('/', (req, res) => {
  res.json(users);
});

// GET user by ID
router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  user ? res.json(user) : res.status(404).send('User not found');
});

// POST new user
router.post('/', (req, res) => {
  const newUser: Patient = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT update user
router.put('/:id', (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index !== -1) {
    users[index] = { id: users[index].id, ...req.body };
    res.json(users[index]);
  } else {
    res.status(404).send('User not found');
  }
});

// DELETE user
router.delete('/:id', (req, res) => {
  users = users.filter(u => u.id !== parseInt(req.params.id));
  res.status(204).send();
});

export default router;
