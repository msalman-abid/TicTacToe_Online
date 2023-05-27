var express = require('express');
var router = express.Router();
const mysql = require('mysql');


let game_arr = Array(9).fill(null);

/* Game Request */
router.get('/', function (req, res, next) {
  res.send('API is working properly!');
});
router.get('/clear', function (req, res, next) {
  game_arr = Array(9).fill(null);
  res.send('API is working properly!');
});


router.post('/update', function (req, res, next) {
  var pool = req.app.get("pool");
  const token = req.body.token;
  const result = req.body.result;

  var updateQuery;

  if (result === "won") {
    token.username + "') + 1";

    var value = (parseInt(token.won) + 1);
    updateQuery = "UPDATE users SET won = " + (value.toString()) +
      " WHERE email like '" + token.username + "'";
  }
  else if (result === "lost") {
    var value = (parseInt(token.lost) + 1);
    token.username + "') + 1";
    updateQuery = "UPDATE users SET lost = " + (value.toString()) +
      " WHERE email like '" + token.username + "'";
  }
  else if (result === "draw") {
    var value = (parseInt(token.draw) + 1);
    token.username + "') + 1";
    updateQuery = "UPDATE users SET draw = " + value.toString() +
      " WHERE email like '" + token.username + "'";
  }

  pool.query(updateQuery, (err, rows) => {
    if (err) {
      console.error(err);
      return;
    }
    // rows added
    console.log(updateQuery);
  })

})




router.put('/', function (req, res, next) {
  console.log(req.body)
  // { id: 1, m_sym: 'X' }
  const m_idx = Number(req.body.idx);
  const m_symbol = req.body.symbol;

  if (!game_arr[m_idx]) {
    game_arr[m_idx] = m_symbol;
  }

  // console.log(m_valid_move);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({ data: game_arr });
});
module.exports = router;