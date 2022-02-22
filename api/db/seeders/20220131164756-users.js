'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users',
      [
        {
          username: 'Sarah',
          email: 'sarah@1',
          password: '12345678',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'Michael',
          email: 'miha@1',
          password: '12345678',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
