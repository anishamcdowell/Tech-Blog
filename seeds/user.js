const { User } = require('../models');

const userData = [
    {
        name: 'user1',
        email: 'email@email.com',
        password: 'passwordtest'

    },
    {
        name: 'user2',
        email: 'email@email.com',
        password: 'passwordtest'
    },
    {
        name: 'user3',
        email: 'email@email.com',
        password: 'passwordtest'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;