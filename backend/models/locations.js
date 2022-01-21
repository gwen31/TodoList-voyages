const connection = require('../db');

const getAll = () => {
  return connection.query('SELECT * FROM locations');
};

const getOne = (id) => {
  return connection.query('SELECT * FROM locations WHERE id=?', [id]);
};

const getDetailLocation = (id) => {
  return connection.query("SELECT name, type FROM locations JOIN details ON locations.details_id=details.id WHERE locations.id=?", [id]);
} 

const create = (data) => {
  return connection.query('INSERT INTO locations SET ?', [data]);
};

const update = (id, data) => {
  return connection.query('UPDATE locations SET ? WHERE id= ?', [data, id]);
};

const deleteOne =  (id) => {
  return connection.query('DELETE FROM locations WHERE id=?', [id]);
}
module.exports = {
    getAll,
    getOne,
    getDetailLocation,
    create, 
    update,
    deleteOne
}