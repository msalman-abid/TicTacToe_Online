var express = require('express');
const mysql = require('mysql');
var qs = require('querystring');

var router = express.Router();

function insertUser(pool, data) {

    let insertQuery = "INSERT INTO ?? (??,??,??,??,??) VALUES (?,?,?,?,?)";
    let query = mysql.format(insertQuery, ["users", "email", "password", "won", "lost",
        "draw", data.username, data.password, 0, 0, 0]);

    pool.query(query, (err, rows) => {
        if (err) {
            console.error(err);
            return;
        }
        // rows added
        console.log(query);
    })
}

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log(req.body);
    res.send("Hellow")
});


router.post('/signup', function (req, res, next) {
    var pool = req.app.get("pool");

    console.log(req.body);
    data = req.body.credentials;

    setTimeout(() => {
        insertUser(pool, data);
    }, 500);

    res.send({
        token: {
            username: data.username,
            won: 0,
            lost: 0,
            draw: 0
        }
    })


});

router.post('/', function (req, res, next) {
    var pool = req.app.get("pool");
    data = req.body.credentials;
    // console.log(data.username);
    let insertQuery = "SELECT * FROM users WHERE email like '" + data.username + "'" + "AND password like '" + data.password + "'";
    let query = insertQuery;
    pool.query(query, (err, rows) => {
        if (err) {
            console.error(err);
            return;
        }

        if (!rows.length) {
            // Login Failed

            res.send().status(401);
            return;
        }

        // Login Sucessful
        console.log(rows[0]);
        res.send({
            token: {
                username: data.username,
                won: rows[0].won,
                lost: rows[0].lost,
                draw: rows[0].draw
            }
        })
    })
});

module.exports = router;