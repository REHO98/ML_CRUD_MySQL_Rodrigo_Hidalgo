"use strict";
const productsJSON = require("../../data/productsDataBase.json");
const products = productsJSON.map(
  ({ name, price, discount, description, image, category }) => {
    return {
      name,
      price,
      discount,
      description,
      image,
      categoryId: category === "visited" ? 1 : 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }
);
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", products, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulDelete("Products", null, {});
  },
};
