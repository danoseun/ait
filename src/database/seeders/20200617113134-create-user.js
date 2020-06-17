/* eslint-disable no-unused-vars */
import 'dotenv/config';
import { hashPassword } from '../../utils/password';

const hash = hashPassword(process.env.PASSWORD);

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Users',
    [
      {
        username: 'advansio',
        password: hash,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'testname',
        password: hash,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ],

    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {})
};
