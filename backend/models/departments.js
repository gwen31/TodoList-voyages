const connection = require('../db');

const getAll = () => {
    return connection.query('SELECT * FROM departments');
};
const getAllDepatementByName = (name) => {
    return connection.query('SELECT * FROM departments WHERE name=?', [name]);
}

const getOne = (id) => {
    return connection.query('SELECT * FROM departments WHERE id=?', [id]);
};

const create = (data) => {
    return connection.query('INSERT INTO departments SET ?', [data]);
};

const update = (id, data) => {
    return connection.query('UPDATE departments SET ? WHERE id= ?', [data, id]);
};

const deleteOne =  (id) => {
    return connection.query('DELETE FROM departments WHERE id=?', [id]);
}

const departmentLocation = (id) => {
    return connection.query("SELECT * FROM locations WHERE departments_id=?", [id]);
}

module.exports = { getAll,
                   getAllDepatementByName,
                   getOne,
                   create,
                   update,
                   deleteOne,
                   departmentLocation
                 };
