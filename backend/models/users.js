const Joi = require('joi');
const connection = require('../db');

const validate = (data, forCreation = true) => {
  const presence = forCreation ? 'required' : 'optional';
  return Joi.object({
    username: Joi.string().max(25).presence(presence),
    email: Joi.string().email().max(80).presence(presence),
    password: Joi.string().max(255).presence(presence),
  }).validate(data, { abortEarly: false }).error;
};

const createOne = (data) => {
  return connection.query("INSERT INTO users  SET ?",[data]);
};

const getAll = () => {
    return connection.query('SELECT * FROM users');
  };
  
  const getOne = (id) => {
    return connection.query('SELECT * FROM users WHERE id=?', [id]);
  };

const update = (id, data) => {
  console.log(data)
  return connection.query('UPDATE users SET ? WHERE id=?', [data, id]);
};

const deleteOne = (id) => {
  return connection.query('DELETE FROM users WHERE id=?', [id]);
};

module.exports = {
  getAll,
  getOne,
  createOne,
  update,
  deleteOne,
  validate,
  
};