const { Post } = require ('../models');
const posData = 
[
  {
    post_title: "Post Title 1",
    post_body: "Body content",
    // user_id: 3
  },
  {
    post_title: "Post Title 1",
    post_body: "Body content",
    // user_id: 1
  },
  {
    post_title: "Post Title 1",
    post_body: "Body content",
    // user_id: 2
  },
]
 const seedPosts = () => Post.bulkCreate(postData);

 module.exports = seedPosts