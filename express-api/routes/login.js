var express = require('express');
const mysql = require('mysql');

var router = express.Router();

function insertUser(pool, data) {

    let insertQuery = 'INSERT INTO ?? (??,??,??,??,??) VALUES (?,?,?,?,?)';
    let query = mysql.format(insertQuery, ["users", "email", "password", "won", "lost",
        "draw", data.username, data.password, 0, 0, 0]);

    pool.query(query, (err, response) => {
        if (err) {
            console.error(err);
            return;
        }
        // rows added
        console.log(response.insertId);
    })
}
/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req.body);
    res.send("Hellow")
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

router.post('/signup', function(req, res, next) {
    var pool = req.app.get("pool");
    
    // pool.getConnection((err, connection) => {
    //     if (err) {
    //         throw err;
    //     }

    // })
    console.log(req.body);
    data = req.body.credentials;
    
    setTimeout(() => {
        insertUser(pool, data);
    },500);
    

});
module.exports = router;
