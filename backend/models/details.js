const connection = require('../db');

const getAll = () => {
  return connection.query('SELECT * FROM details');
};

const getOne = (id) => {
  return connection.query('SELECT * FROM details WHERE id=?', [id]);
};

const create = (data) => {
  return connection.query('INSERT INTO details SET ?', [data]);
};

const update = (id, data) => {
  return connection.query('UPDATE details SET ? WHERE id= ?', [data, id]);
};

const deleteOne =  (id) => {
  return connection.query('DELETE FROM details WHERE id=?', [id]);
}
module.exports = {
    getAll,
    getOne,
    create, 
    update,
    deleteOne
}