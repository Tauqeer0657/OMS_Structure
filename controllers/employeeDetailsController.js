const db = require("../db");

exports.getAllEmployees = (req, res) => {
    const query = 'SELECT * FROM tb_employee';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      res.json(results);
    });
  };
  
//   // Add a new employee
//   exports.addEmployee = (req, res) => {
//     const newEmployee = req.body;
//     const query = 'INSERT INTO tb_employee SET ?';
//     db.query(query, newEmployee, (err, result) => {
//       if (err) {
//         console.error('Error executing query:', err);
//         res.status(500).json({ error: 'Internal Server Error' });
//         return;
//       }
//       res.json({ message: 'Employee added successfully', employeeId: result.insertId });
//     });
//   };




// Assuming you have a counter variable initialized to 0
let employeeCounter = 1;

// Add a new employee with auto-generated custom employee ID
exports.addEmployee = (req, res) => {
  const newEmployee = req.body;

  // Generate custom employee ID (e.g., GL001, GL002, ...)
  const employeeId = `GL${String(employeeCounter).padStart(3, '0')}`;
  newEmployee.EmployeeID = employeeId;

  const query = 'INSERT INTO tb_employee SET ?';
  db.query(query, newEmployee, (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    // Increment the counter for the next employee
    employeeCounter++;

    res.json({ message: 'Employee added successfully', employeeId: employeeId });
  });
};
