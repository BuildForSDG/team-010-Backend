"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    firstname: {
      type: Sequelize.STRING
    },
    middlename: {
      type: Sequelize.STRING
    },
    lastname: {
      type: Sequelize.STRING
    },
    user_type: {
      type: Sequelize.STRING
    },
    role: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: queryInterface => queryInterface.dropTable('Users')
};
//# sourceMappingURL=20200505123246-create-user.js.map