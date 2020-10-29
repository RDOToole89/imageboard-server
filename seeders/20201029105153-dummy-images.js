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
        {
          title: "High rise",
          url:
            "https://images.unsplash.com/photo-1603900507826-ea715b87271c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=965&q=80",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Spirat grayscale",
          url:
            "https://images.unsplash.com/photo-1603896977410-bba34a4d5084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Coffee by the bay",
          url:
            "https://images.unsplash.com/photo-1603783032800-9c13b1c65c5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=907&q=80",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Corona falls",
          url:
            "https://images.unsplash.com/photo-1603847575936-6d09ce4cae90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Colors",
          url:
            "https://images.unsplash.com/photo-1603864133490-83c0f55a80d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Red bastard",
          url:
            "https://images.unsplash.com/photo-1603858428220-295d290809d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Fully loaded",
          url:
            "https://images.unsplash.com/photo-1602526213012-e8bfd0f21501?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=991&q=80",

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
