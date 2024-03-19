'use strict';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require('bcrypt');
const salt = 10;
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          id: '554f244e-2eed-4225-8ceb-1cb3231bab23',
          name: 'User1',
          email: 'user1@gmail.com',
          password: bcrypt.hashSync('password1', salt),
          createdAt: '2024-01-01',
          updatedAt: '2024-01-01',
        },
        {
          id: '3b58992a-1171-4f66-a784-c1c8d660333f',
          name: 'User2',
          email: 'user2@gmail.com',
          password: bcrypt.hashSync('password2', salt),
          createdAt: '2024-02-02',
          updatedAt: '2024-02-02',
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
