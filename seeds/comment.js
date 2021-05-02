const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Comment extends Model {

}

Comment.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      comment_body: {
        type: DataTypes.STRING,
        allowNull: false,
        },
    },
    {
      hooks: {
        beforeCreate: async (newCommentData) => {
          newCommentData.password = await bcrypt.hash(newCommentData.password, 10);
          return newCommentData;
        },
        beforeUpdate: async (updatedCommentData) => {
          updatedCommentData.password = await bcrypt.hash(updatedCommentData.password, 10);
          return updatedCommentData;
        },
      },
      sequelize,
      // timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'user',
    }
  );  

module.exports = Comment; 