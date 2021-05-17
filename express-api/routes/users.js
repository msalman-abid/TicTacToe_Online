var express = require('express');
var router = express.Router();
const mysql = require('mysql2');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/leaderboard',  function (req, res) {
  var pool = req.app.get("pool");
  
  let selectQuery = 'SELECT * FROM ?? ORDER BY won DESC, draw DESC, lost ASC;';
  let query = mysql.format(selectQuery, ["users"]);
  // const q_result = await getLeaderboard(pool, query);

  pool.query(query, (err, rows) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(rows);
    res.send(rows);

  })
});

module.exports = router;
