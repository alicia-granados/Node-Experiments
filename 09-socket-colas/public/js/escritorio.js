// Referencias del HTML
const lblEscritorio  = document.querySelector('h1');
const lblTicket  = document.querySelector('small');
const btnAtender = document.querySelector('button');
const divAlerta = document.querySelector('.alert');

const searchParams = new URLSearchParams(window.location.search);

if( !searchParams.has('escritorio' ) ){

    window.location = 'index.html'
    throw new   Error( 'El escritorio es obligatorio ' );

}

const escritorio = searchParams.get('escritorio');
//console.log({escritorio})

lblEscritorio.innerText = escritorio;

divAlerta.style.display = 'none';

const socket = io();

socket.on('connect', () => {
    // console.log('Conectado');
    btnAtender.disabled  = false;

});

socket.on('disconnect', () => {
    // console.log('Desconectado del servidor');
    btnAtender.disabled  = true;
});

socket.on('ultimo-ticket', ( ultimo) => {
    //SlblNuevoTicket.innerText = 'Ticket ' + ultimo;
})

btnAtender.addEventListener( 'click', () => {
    
    socket.emit( 'atender-ticket', {escritorio}, ( {ok , ticket, msg} ) => {
        //console.log('Desde el server', payload );
        if(!ok) {
            lblTicket.innerText = `nadie`
            return divAlerta.style.display = '';
        }

        lblTicket.innerText = `Ticket  ${ticket.numero}`
    });

});