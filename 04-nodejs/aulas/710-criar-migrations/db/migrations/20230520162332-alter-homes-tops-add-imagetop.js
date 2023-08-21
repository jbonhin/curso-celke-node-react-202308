'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Acrescentar nova coluna imageTop na tabela HomesTops
    await queryInterface.addColumn('HomesTops', 'imageTop', {
      type: Sequelize.DataTypes.STRING,
      after: "textBtnTop"
    });
  },

  // Executar down - rollback - Permite que seja desfeita a migration, permitindo a gestão das alterações do banco de dados e versionamento.
  async down (queryInterface) {
    // Excluir a coluna
    await queryInterface.removeColumn('HomesTops', 'imageTop');
  }
};
