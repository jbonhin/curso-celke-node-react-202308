'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Criar a tabela HomesTops
    await queryInterface.createTable('HomesTops', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER 
      },
      titleOneTop: {
        type: Sequelize.STRING
      },
      titleTwoTop: {
        type: Sequelize.STRING
      },
      titleThreeTop: {
        type: Sequelize.STRING
      },
      linkBtnTop: {
        type: Sequelize.STRING
      },
      textBtnTop: {
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
    });
  },

  // Executar down - rollback - Permite que seja desfeita a migration, permitindo 
  // a gestão das alterações do banco de dados e versionamento.
  async down (queryInterface) {
    // Apagar a tabela
    await queryInterface.dropTable('HomesTops');
  }
};
