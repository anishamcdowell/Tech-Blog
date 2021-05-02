const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Post extends Model {

}

Post.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      post_title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      post_body: {
        type: DataTypes.STRING,
        allowNull: false,
        },
    },
    {
      hooks: {
        beforeCreate: async (newPostData) => {
          newPostData.password = await bcrypt.hash(newPostData.password, 10);
          return newPostData;
        },
        beforeUpdate: async (updatedPostData) => {
          updatedPostData.password = await bcrypt.hash(updatedPostData.password, 10);
          return updatedPostData;
        },
      },
      sequelize,
      // timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'post',
    }
  );  

module.exports = Post; 
