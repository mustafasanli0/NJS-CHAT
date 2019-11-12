const socketio = require('socket.io');
const socketAuthorization = require('../middleware/socketAuthorization');
const io = socketio();

const socketApi = {
    io
};

io.use(socketAuthorization);

io.on('connection', (socket) => {
    console.log('A Good User Logged In -> ' + socket.request.user.name + " " + socket.request.user.surname);
});

module.exports = socketApi;