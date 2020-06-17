/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Comments',
    [
      {
        body:
              'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        body:
              'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        body:
              'Nulla mollis molestie lorem. Quisque ut erat.',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        body:
              'Curabitur gravida nisi at nibh lorem de la ipsum.',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ],

    {}
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Comments', null, {})
};
