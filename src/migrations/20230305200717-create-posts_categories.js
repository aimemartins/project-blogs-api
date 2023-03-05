'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_categories', {

      postId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'post_id',
        references: { // QUANDO FOR REFERENCIAR UMA FOREIN KEY
          model: 'blog_posts', // TABELA
          key: 'id', // COLUNA
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

      categoryId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'category_id',
        references: { // QUANDO FOR REFERENCIAR UMA FOREIN KEY
          model: 'categories', // TABELA
          key: 'id', // COLUNA
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

    })
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('posts_categories');
  }
};
