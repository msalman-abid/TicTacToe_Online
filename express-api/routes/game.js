var express = require('express');
var router = express.Router();

let game_arr = Array(9).fill(null);
let X_is_next = true;

/* Game Request */
router.get('/', function(req, res, next) {
  res.send('API is working properly!');
});

router.put('/', function(req, res, next) {
    console.log(req.body)
    // { id: 1, m_sym: 'X' }
    const m_idx = Number(req.body.idx);
    const m_symbol = req.body.symbol;

    if (!game_arr[m_idx])
    {
        game_arr[m_idx] = m_symbol;
    }
    console.log(game_arr);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({data: game_arr });
});
module.exports = router;