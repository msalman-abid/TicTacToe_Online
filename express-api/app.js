var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var mysql = require('mysql')
const socketIo = require('socket.io');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testAPIRouter = require("./routes/testAPI");
var gameRouter = require('./routes/game');
var loginRouter = require('./routes/login');

// var app = express();
// opponent: scoket.id of the opponent, symbol = "X" | "O", socket: player's s
var players = {};
var unmatched;
var clients = {};

module.exports = function (app, server) {

    var io = socketIo(server, {
        cors: {
            origin: "*"
            // methods: ["GET", "POST"]
        }
    });
    app.set("io", io)

    var pool = mysql.createPool({
        connectionLimit: 10,
        host: 'localhost',
        user: 'newuser',
        password: 'newpassword',
        database: 'tto_db'
    });

    app.set("pool", pool)
    
    // view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');

    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(cors());

    app.use('/', indexRouter);
    app.use('/users', usersRouter);
    app.use('/testAPI', testAPIRouter);
    app.use('/game', gameRouter);
    app.use('/login', loginRouter);

    // catch 404 and forward to error handler
    app.use(function (req, res, next) {
        next(createError(404));
    });

    // error handler
    app.use(function (err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // render the error page
        res.status(err.status || 500);
        res.render('error');
    });


    /* Handling of remote connections*/

    io.on("connection", function (socket) {
        let id = socket.id;

        console.log("New client connected. ID: ", socket.id);
        clients[socket.id] = socket;

        socket.on("disconnect", () => {// Bind event for that socket (player)
            console.log("Client disconnected. ID: ", socket.id);
            delete clients[socket.id];
            socket.broadcast.emit("clientdisconnect", id);
        });

        join(socket); // Fill 'players' data structure

        if (opponentOf(socket)) { // If the current player has an opponent the game can begin
            socket.emit("game.begin", { // Send the game.begin event to the player
                symbol: players[socket.id].symbol
            });

            opponentOf(socket).emit("game.begin", { // Send the game.begin event to the opponent
                symbol: players[opponentOf(socket).id].symbol
            });
        }


        // Event for when any player makes a move
        socket.on("make.move", function (data) {
            if (!opponentOf(socket)) {
                // This shouldn't be possible since if a player doens't have an opponent the game board is disabled
                return;
            }

            // Validation of the moves can be done here

            socket.emit("move.made", data); // Emit for the player who made the move
            opponentOf(socket).emit("move.made", data); // Emit for the opponent
        });

        // Event to inform player that the opponent left
        socket.on("disconnect", function () {
            if (opponentOf(socket)) {
                opponentOf(socket).emit("opponent.left");
            }
        });
    });


    function join(socket) {
        players[socket.id] = {
            opponent: unmatched,
            symbol: "X",
            socket: socket
        };

        // If 'unmatched' is defined it contains the socket.id of the player who was waiting for an opponent
        // then, the current socket is player #2
        if (unmatched) {
            players[socket.id].symbol = "O";
            players[unmatched].opponent = socket.id;
            unmatched = null;
        } else { //If 'unmatched' is not define it means the player (current socket) is waiting for an opponent (player #1)
            unmatched = socket.id;
        }
    }

    function opponentOf(socket) {
        if (!players[socket.id].opponent) {
            return;
        }
        return players[players[socket.id].opponent].socket;
    }

}

// var io = app.get("io");  



// module.exports = app;
