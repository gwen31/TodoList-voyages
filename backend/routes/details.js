const express = require('express');
const router = express.Router();

const { getAllDetails,
        getDetails,
        createDetails,
        updateDetails,
        deleteDetails
     } = require('../controllers/details');
 

 router.get('/', getAllDetails);
 router.get('/:id', getDetails);
 router.post('/', createDetails);
 router.put('/:id', updateDetails);
 router.delete('/:id', deleteDetails);

 module.exports = router;