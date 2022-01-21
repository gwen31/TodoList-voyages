const Department = require('../models/departments');

//GET All departments
const getAllDepartments = async (req, res) => {
    try {
        const departments = await Department.getAll();
        res.status(200).json(departments[0]);
    } catch (error) {
        console.log(error);
        res.status(500).send('An error occured while retrieving departments');
    }
};
const getAllDepartmentsName = async (req, res) => {
  try {
      const departments = await Department.getAllDepatementByName();
      res.status(200).json(departments[0]);
  } catch (error) {
      console.log(error);
      res.status(500).send('An error occured while retrieving departments');
  }
};

//GET One departments
const getDepartments = async (req, res) => {
    try {
        const {id} = req.params;
        const [departments] = await Department.getOne(id);
        res.status(200).json(departments[0]);
    } catch (error) {
        console.log(error);
        res.status(500).send('An error occured while retrieving departments infos');    
    }
};

//POST Add departments
const createDepartments = async (req, res) => {
    try {
        const { body } = req;
        const { insertId } = await Department.create(body);
        res.status(201).json({
            id: insertId,
            ...body,
        });
    } catch {
        console.log(error);
        res.status(500).send('An error occured while creating departments')
    }
};

//PUT  Update departments
const updateDepartments = async (req, res) => {
    try {
      const { id } = req.params;
      const { body } = req;
      await Department.update(id, body);
      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      res.status(500).send('An error occured while updating departments');
    }
  };

// DELETE delete departments
const deleteDepartments = async (req, res) => {
    try {
      const { id } = req.params;
      await Department.deleteOne(id);
      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      res.status(500).send('An error occured while deleting departments');
    }
  };

// Liste des lieux(locations) par departements(departments)
  const departmentsIdLocations = async (req, res) => {
    try {
      const departmentsId = req.params.id;
      const locationsDepartments = await Department.departmentLocation(departmentsId);
      res.status(200).json(locationsDepartments[0]);
    } catch (error) {
      console.log(error);
      res.status(500).send('An error occured while locations on the departments');
    }
  };

module.exports = {
    getAllDepartments,
    getAllDepartmentsName,
    getDepartments,
    createDepartments,
    updateDepartments,
    deleteDepartments,
    departmentsIdLocations
}