const { Post } = require("../models")

const postData = [
    {
        // user_id: "1",
        body: "Test"
    },
];

const seedPosts = () => Post.bulkcreate(postData);

module.exports = seedPosts;
