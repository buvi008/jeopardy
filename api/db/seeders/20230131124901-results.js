'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Results',
      [
        {
          username: 'Sarah',
          points: 600,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'Michael',
          points: 1200,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Results', null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
