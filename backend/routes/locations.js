const express = require('express');
const router = express.Router();

const { getAllLocations,
        getLocations,
        getDetailsLocations,
        createLocations,
        //createLocationDepartments,
        updateLocations,
        deleteLocations
     } = require('../controllers/locations');
 

 router.get('/', getAllLocations);
 router.get('/:id', getLocations);
 router.get('/:id/details', getDetailsLocations);
 router.post('/', createLocations);
 //router.post('/departments/:id', createLocationDepartments);
 router.put('/:id', updateLocations);
 router.delete('/:id', deleteLocations);

 module.exports = router;