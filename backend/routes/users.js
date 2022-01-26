const express = require('express');

const router = express.Router();
const {
  getAllUsers,
  deleteUser,
  signUp,
  getUser,
  updateUser,
  
} = require('../controllers/users');

router.get('/', getAllUsers);
router.get('/:id', getUser);
router.post('/', signUp);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;