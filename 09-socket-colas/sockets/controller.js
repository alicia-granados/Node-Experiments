const TicketControl = require('../models/ticket-control');
const ticketControl = new TicketControl();

const socketController = (socket) => {
    
    socket.on('siguente-ticket', ( payload, callback ) => {
        const siguiente = ticketControl.siguiente();
        callback(siguiente);

        //TODO : notificar que hay un nuevo ticket pndiente de asignar

    })

}



module.exports = {
    socketController
}

