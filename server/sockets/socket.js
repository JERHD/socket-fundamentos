const {io} = require('../server');


io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('sendMessage', {
        user: 'Administrador',
        message: 'Bienvenido',
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar el cliente
    client.on('sendMessage', (data, callback) => {
        console.log(data);

        client.broadcast.emit('sendMessage', data);

        // if(message.user){
        //     callback({
        //         message: 'Todo salio bien'
        //     });
        // }else{
        //     callback({
        //         message: 'Todo salio mal'
        //     });
        // }
        
    });

});