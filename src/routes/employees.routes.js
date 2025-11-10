const express = require('express');
const router = express.Router();
const controller = require('../controllers/employees.controller');
const validateEmployee = require('../middlewares/validateEmployee');

// CRUD routes
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', validateEmployee, controller.create);
router.put('/:id', validateEmployee, controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
