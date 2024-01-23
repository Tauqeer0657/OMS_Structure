
const express = require('express');
// const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const employeeDetails = require('./routes/employeeDetailsRoutes')

const app = express();
const port = process.env.PORT || 3306;

app.use(cookieParser());
// app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/api/employee', employeeDetails);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
