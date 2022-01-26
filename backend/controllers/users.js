const User = require('../models/users');
const bcryptjs = require('bcryptjs');

// GET USERS
const getAllUsers = async (req, res) => {
  try {
    const users = await User.getAll();
    res.status(200).json(users[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while retrieving users');
  }
};

// GET ONE USER
const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const [user] = await User.getOne(id);
    res.status(200).json(user[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while retrieving user infos');
  }
};
//CREATE USER INSCRIPTION
const signUp =  async(req, res) => {

  const [retrieveUsers] = await User.getAll();
  const duplicate = retrieveUsers.find((person)=> person.email === req.body.email);
    if (duplicate)
      return res.status(409).json({message: 'This email is already used !'}); //CHEK EMAIL
  
      try{
        bcryptjs.genSalt(10, function(err, salt){
        bcryptjs.hash(req.body.password, salt, function(err, hash){ //Password hashed
            const user = {
                      username: req.body.username,
                      email: req.body.email,
                      password: hash
                    }
            const newUser = User.createOne(user);
            res.status(201).json({message: "User created successfully"});
        })
        })
      } catch (err){
        res.status(500).json({message: err})
      } 
}

//UPDATE USER
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await User.update(id, body);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while updating user');
  }
};

//DELETE USER
const deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      await User.deleteOne(id);
      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      res.status(500).send('An error occured while deleting user');
    }
  };

module.exports = {
  getAllUsers,
  deleteUser,
  signUp,
  getUser,
  updateUser,
};