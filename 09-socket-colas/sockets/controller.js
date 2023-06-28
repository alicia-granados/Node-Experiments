const TicketControl = require('../models/ticket-control');
const ticketControl = new TicketControl();

const socketController = (socket) => {
    
    socket.emit('ultimo-ticket', ticketControl.ultimo);
    socket.emit('estado-actual', ticketControl.ultimos4);

    socket.on('siguente-ticket', ( payload, callback ) => {
        const siguiente = ticketControl.siguiente();
        callback(siguiente);

        //TODO : notificar que hay un nuevo ticket pndiente de asignar

    })

    socket.on('atender-ticket', ( {escritorio}, callback ) => {
        //console.log(payload.escritorio)
        if( ! escritorio ){
            return callback ({
                ok:false,
                msg: 'El escritorio es obligatorio'
            });
        }

        const ticket = ticketControl.atenderTicket(escritorio);
        
        //TODO: notificar cambio en los ultimos4
        
        socket.broadcast.emit('estado-actual', ticketControl.ultimos4);

        if(!ticket ){
            callback({
                ok:false,
                msg: 'Ya no hay tickets pendientes'
            });
        } else {
            callback({
                ok: true,
                ticket
            })
        }

    })

}



module.exports = {
    socketController
}

