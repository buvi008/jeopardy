'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Themes',
      [
        {
          title: 'А как это по-русски?',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'География',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Сказки',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Фильмы',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'История',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Themes', null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
