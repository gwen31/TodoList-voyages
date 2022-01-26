const express = require('express');
const router = express.Router();

const usersControllers = require('../controllers/users');

router.post('/', usersControllers.signIn);

module.exports = router;



