const express = require('express');

const router = express.Router();
const {
  getAllUsers,
  deleteUser,
  createUser,
  getUser,
  updateUser,
  signUp,
} = require('../controllers/users');

router.get('/', getAllUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;