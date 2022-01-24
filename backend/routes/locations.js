const express = require('express');
const router = express.Router();

const { getAllLocations,
        getLocations,
        getDetailsLocations,
        createLocations,
        updateLocations,
        deleteLocations
     } = require('../controllers/locations');
 

 router.get('/', getAllLocations);
 router.get('/:id', getLocations);
 router.get('/:id/details', getDetailsLocations);
 router.post('/', createLocations);
 router.put('/:id', updateLocations);
 router.delete('/:id', deleteLocations);

 module.exports = router;