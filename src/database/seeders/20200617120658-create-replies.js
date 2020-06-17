/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Replies',
    [
      // comment 1
      {
        content:
                'Que pasa?',
        userId: 1,
        commentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Quisque porta volutpat erat.',
        userId: 2,
        commentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Quisque porta.',
        userId: 2,
        commentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Quisque porta volutpat erat.',
        userId: 2,
        commentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // cOMMENT 2
      {
        content: 'Quisque porta volutpat erat.',
        userId: 2,
        commentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Lacase du papel',
        userId: 1,
        commentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Quisque porta volutpat erat.',
        userId: 2,
        commentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Du papel du la soir',
        userId: 2,
        commentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // comment 3
      {
        content: 'Are you there?',
        userId: 2,
        commentId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Vouz e la vous?',
        userId: 2,
        commentId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Domengous le zoutr la casa?',
        userId: 2,
        commentId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // comment 4
      {
        content: 'Mama cita le be coups',
        userId: 2,
        commentId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Mia Amigos?',
        userId: 2,
        commentId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {}
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Replies', null, {})
};
