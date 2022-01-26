const User = require('../models/users');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken'); 

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

//LOGIN
const signIn =  async(req, res) => {
  const {email , password} = req.body;
    if (!email || !password)
      return res.status(400).json({message: 'Email and password are requires'});

  const [verifyUsers] = await User.getAll();
  const foundUser = verifyUsers.find((person)=> person.email === req.body.email)
    if (!foundUser) {
      return res.status(401).json({message:'Invalid credentials'});
  
    } else {
    const match = await bcryptjs.compare(req.body.password, foundUser.password );
    console.log(foundUser)
    console.log(req.body.password)
      if (match) {
        const token = jwt.sign({
          email: verifyUsers.email,
          userId: verifyUsers.id, 
        }, 'secret', function(err, token) {
          res.status(200).json({message: 'authentification succesful', token: token})
        })
      } else {
        res.status(500).json({message:'Password incorrect !'});
      }
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
  signIn,
  getUser,
  updateUser,
};