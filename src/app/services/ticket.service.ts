import {Ticket} from '../models/ticket.model';
import {Injectable, EventEmitter} from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
export class TicketService {
    ticketsChanged = new EventEmitter<Ticket[]>();

    private tickets: Ticket[] = [
        new Ticket(1, new Date(), 'Regular', 12),
        new Ticket(1, new Date(), 'Regular', 3),
    ];

    addTicket(ticket: Ticket) {
        this.tickets.push(ticket);
        this.ticketsChanged.emit(this.tickets.slice());
    }

    getTickets() {
        return this.tickets;
    }

    getLength(): number {
        return this.tickets.length + 1;
    }

}
