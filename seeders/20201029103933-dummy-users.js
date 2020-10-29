"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert(
      "users",
      [
        {
          fullName: "Roibin O'Toole",
          email: "roibin@gmail.com",
          password: "test123456789",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Caitlin O'Toole",
          email: "caitlin@gmail.com",
          password: "test123456789",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Rory O'Toole",
          email: "rory@gmail.com",
          password: "test123456789",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Kevin O'Toole",
          email: "kevin@gmail.com",
          password: "test123456789",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Brendan O'Toole",
          email: "brendan@gmail.com",
          password: "test123456789",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
