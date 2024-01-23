const db = require("../db");

// Getting all employees data

exports.getAllEmployees = (req, res) => {
    const query = 'SELECT * FROM tb_employee';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      res.json(results);
      console.log(results);
    });
  };

// Inserting employees data

exports.addEmployee = (req, res) => {
  const newEmployee = req.body;

  const query = 'INSERT INTO tb_employee SET ?';
  db.query(query, newEmployee, (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }else{
    res.json({ message: 'Employee added successfully'});
    }
  });
};



exports.updateEmployee = (req, res) => {
  const EmployeeID = req.params.EmployeeID; 
  const updatedEmployee = req.body;
  const query = 'UPDATE tb_employee SET ? WHERE EmployeeID = ?';

  db.query(query, [updatedEmployee, EmployeeID], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }else{
      if (result.affectedRows === 0) {
        res.status(404).json({ error: 'Employee not found' });
        return;
      }else if (result.affectedRows > 0 && result.changedRows === 0) {
        res.status(201).json('Data already updated');
        return;
      }else{
        res.json({ message: 'Employee updated successfully' });
        console.log(result);
        }
  }
  });
};
