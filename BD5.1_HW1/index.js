let express = require('express');
let { employee } = require('./models/employee.model');
let { sequelize } = require('./lib/index');
let app = express();

let employeeData = [
  {
    name: 'Suraj C',
    department: 'Finance',
    salary: 40000,
    doj: 5 / 10 / 1999,
  },
  {
    name: 'Aakash M',
    department: 'Development',
    salary: 60000,
    doj: 10 / 8 / 2005,
  },
  {
    name: 'Naren S',
    department: 'HR',
    salary: 45000,
    doj: 6 / 1 / 2012,
  },
  {
    name: 'Manasi D',
    department: 'Development',
    salary: 70000,
    doj: 7 / 8 / 1997,
  },
  {
    name: 'Aakriti K',
    department: 'Finance',
    salary: 40000,
    doj: 23 / 4 / 2001,
  },
];

app.get('/seed-app', async (req, res) => {
  try {
    await sequelize.sync({ force: true });

    await employee.bulkCreate(employeeData);
    res.status(200).json({ message: 'Database seeding succeeded!' });
  } catch (error) {
    res.status(500).json({
      message: 'Error!Seeding database is not succeed!',
      error: error.message,
    });
  }
});

app.listen(3000, () => {
  console.log('Express server initialized');
});
