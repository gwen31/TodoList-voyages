const Detail = require('../models/details');

// GET All details
const getAllDetails = async (req, res) => {
    try {
      const details = await Detail.getAll();
      res.status(200).json(details[0]);
    } catch (error) {
      console.log(error);
      res.status(500).send('An error occured while retrieving details');
    }
  };

  //GET One detail
const getDetails = async (req, res) => {
  try {
      const {id} = req.params;
      const [details] = await Detail.getOne(id);
      res.status(200).json(details[0]);
  } catch (error) {
      console.log(error);
      res.status(500).send('An error occured while retrieving details infos');    
  }
};

//POST Add details
const createDetails = async (req, res) => {
  try {
      const { body } = req;
      const { insertId } = await Detail.create(body);
      res.status(201).json({
          id: insertId,
          ...body,
      });
  } catch {
      //console.log(error);
      res.status(500).send('An error occured while creating details')
  }
};


//PUT  Update details
const updateDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await Detail.update(id, body);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while updating details');
  }
};

// DELETE delete details
const deleteDetails = async (req, res) => {
  try {
    const { id } = req.params;
    await Detail.deleteOne(id);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while deleting Details');
  }
};


  module.exports = {
    getAllDetails,
    getDetails,
    createDetails,
    updateDetails,
    deleteDetails
  }