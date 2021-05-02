const User = require('./usersTest');
const Post = require('./posts');
const Comment = require('./comments');

//associations
// Post.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: "CASCADE"
// });


module.exports = { User, Post, Comment };
