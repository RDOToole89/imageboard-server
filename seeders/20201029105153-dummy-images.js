"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "images",
      [
        {
          title: "Vietnam",
          url:
            "https://images.unsplash.com/photo-1603852452378-a4e8d84324a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Dark passage",
          url:
            "https://images.unsplash.com/photo-1603858360516-e2b5b970e64f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Asian scene",
          url:
            "https://images.unsplash.com/photo-1603852451899-912e60faf48a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Groovy computer",
          url:
            "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Night scene asia",
          url:
            "https://images.unsplash.com/photo-1603901138866-e7f3579a8082?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=973&q=80",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("images", null, {});
  },
};
