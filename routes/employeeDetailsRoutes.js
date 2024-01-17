const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeDetailsController');

// Define routes related to employees

// Get all employees
router.get('/', employeeController.getAllEmployees);

// Add a new employee
router.post('/', employeeController.addEmployee);

module.exports = router;
