const express = require('express');

const router = express.Router();

const { getAllDepartments,
        getAllDepartmentsName,
        getDepartments,
        createDepartments,
        updateDepartments,
        deleteDepartments,
        departmentsIdLocations,
     } = require('../controllers/departments');

router.get('/', getAllDepartments, getAllDepartmentsName);
router.get('/:id', getDepartments);
router.post('/', createDepartments);
router.put('/:id', updateDepartments);
router.delete('/:id', deleteDepartments);
router.get('/:id/locations', departmentsIdLocations);

module.exports = router;