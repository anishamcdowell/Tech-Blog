const sequelize = require("../config/connection");
const { User, Post } = require ("../models");
const router = require("express").Router();

router.get("/", async (req, res) => {
    try {
        Post.findAll({
            attributes: [
                "id",
                "user_id",
                "post_body",
            ]
        })
        .then(postData => {
            const posts = postData.map(post => post.get({ plain: true}));
            res.render("homepage", {posts});
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;