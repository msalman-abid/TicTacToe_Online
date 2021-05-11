var express = require('express');
const mysql = require('mysql');
var qs = require('querystring');

var router = express.Router();

function insertUser(pool, data) {

    let insertQuery = 'INSERT INTO ?? (??,??,??,??,??) VALUES (?,?,?,?,?)';
    let query = mysql.format(insertQuery, ["users", "email", "password", "won", "lost",
        "draw", data.username, data.password,0, 0, 0]);

    pool.query(query, (err, rows) => {
        if (err) {
            console.error(err);
            return;
        }
        // rows added
        console.log(rows.insertId);
    })
}

function getUser(pool, data) {

    let insertQuery = 'SELECT * FROM ?? WHERE ?? = ?? AND ?? = ??';
    let query = mysql.format(insertQuery, ["users", "email", data.username, "password", data.password]);

    pool.query(query, (err, rows) => {
        if (err) {
            console.error(err);
            return;
        }
        // Login Sucessful
        console.log("Rows");
        console.log(rows);
        // console.log("Query");
        // console.log(query)
        res.send(rows);
        // res.json(rows);
        // return rows;
    })
}


/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req.body);
    res.send("Hellow")
});


router.post('/signup', function(req, res, next) {
    var pool = req.app.get("pool");

    console.log(req.body);
    data = req.body.credentials;
    
    setTimeout(() => {
        insertUser(pool, data);
    },500);
    
    res.send({
        token:{
            username: data.username,
            won: 0,
            lost: 0,
            draw: 0
        }
    })
    
    
});

router.post('/login', function(req, res, next) {
    console.log("Hello");
    var pool = req.app.get("pool");
    
    // console.log(req.body);
    data = req.body.credentials;
    
    setTimeout(() => {
        getUser(pool, data);
    },500);
    
    console.log("Result");
    console.log(res);
    res.send({
        token:{
            username: data.username
            // won: ,
            // lost: ,
            // draw: 
        }
    })
    
});


router.post('/', function(req, res, next) {

    var m_var = false;

    console.log(req.body);
    credentials = req.body.credentials;
    if(credentials.username === "123")
    {
        if (credentials.password === "owl" ) {
            m_var = true;
        }
    }

    if (m_var) {
        
        res.send({
            token:'test123'
        })
    }
    
});
module.exports = router;