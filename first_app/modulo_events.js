const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged', function () {
    console.log('Listener called')
});

// Reise an event
emitter.emit('messageLogged');
