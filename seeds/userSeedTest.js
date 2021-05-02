const { User } = require("../models");

const userData = [
    {
        username: "user1",
        email: "email@email.com",
        password: "testtest"
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;