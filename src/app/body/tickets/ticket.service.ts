import {Ticket} from './ticket.model';

export class TicketService {
    private tickets: Ticket[] = [
        new Ticket(1, Date.now(), 'SuperSave', 23.30),
        new Ticket(2, Date.now(), 'Regular', 3.30),
        new Ticket(3, Date.now(), 'SuperSave', 83.30)
    ];

}
