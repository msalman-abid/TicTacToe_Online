var express = require('express');
var router = express.Router();

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

module.exports = router;
