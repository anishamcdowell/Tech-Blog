const sequelize = require('../config/connection');

const seedUsers = require('./user');
const seedPosts = require('./post');
const seedComments = require('./comment');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('==DATABASE SYNCED==');

  await seedUsers();
  console.log('==USERS ARE SEEDED==');

  await seedPosts();
  console.log('==POSTS ARE SEEDED==');

  await seedComments();
  console.log('==COMMENTS ARE SEEDED==');

  process.exit(0);
};

seedAll();
