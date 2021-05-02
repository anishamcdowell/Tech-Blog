const sequelize = require("../config/connection");
const { User } = require ("../models");
const router = require("express").Router();

router.get("/", (req, res) => {
    User.findAll({
        attributes: [
            "id",
            "username",
            "email",
            "password",
        ]
    })
    .then(userData => {
        const users = userData.map(user => user.get({ plain: true}));
        res.render('homepage');
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;