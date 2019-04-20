const faker = require('faker');

const Columns = [
  'Id',
  'First Name',
  'Last Name',
  'Job Title',
  'Phone Number',
  'ip address'
];

const RowFunction = () => {
  const rows = [];

  for (let i = 0; i < 250; i++) {
    rows.push([
      (i + 1),
      faker.name.firstName(),
      faker.name.lastName(),
      faker.name.jobTitle(),
      faker.phone.phoneNumber(),
      faker.internet.ip()
    ]);
  }

  return rows;
};

const Rows = RowFunction();

const DiffFakeFunction = () => {
  
};

export { Columns, Rows };
