const express = require('express');
const router = express.Router();
const Controller = require('../controller/usersControllers');

router.get('/', Controller.getAllUsers);
router.get('/:id', Controller.getUsersDetail);
router.delete('/:id', Controller.deleteUsers);
router.put('/:id', Controller.editUsers);


module.exports = router;