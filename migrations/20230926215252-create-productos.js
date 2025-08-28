"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("productos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Nombre: {
        type: Sequelize.STRING,
      },
      Descripcion: {
        type: Sequelize.STRING,
      },
      Price: {
        type: Sequelize.DECIMAL,
      },
      Categoria: {
        type: Sequelize.STRING,
      },
      url: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("productos");
  },
};
