const socketio = require('socket.io');
const io = socketio();

const socketApi = {
    io
};

io.on('connection', (socket) => {
    console.log('A Good User Logged In');
});

module.exports = socketApi;