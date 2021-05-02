const sequelize = require ("../config/connection");

const seedUsers = require("./user");
// const seedPosts = require("./post");
// const seedComments = require("./comment");

const seedAll = async () => {
    await sequelize.sync({ force: true});
    console.log("==DB SYNCED==");

    await seedUsers();
    console.log("==USER TABLE SEEDED==");

    // await seedPosts();
    // console.log("== POSTS TABLE SEEDED =="

    // await seedComments();
    // console.log("== COMMENTS TABLE SEEDED =="
    
    process.exit(0);
};

seedAll();