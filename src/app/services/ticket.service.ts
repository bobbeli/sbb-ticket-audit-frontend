import {Ticket} from '../models/ticket.model';
import {Injectable, EventEmitter} from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
export class TicketService {
    ticketsChanged = new EventEmitter<Ticket[]>();
    totalChanged = new EventEmitter<number>();

    private tickets: Ticket[] = [
        new Ticket(1, new Date(), 'Regular', 12),
        new Ticket(2, new Date(), 'Regular', 3),
    ];

    getTickets() {
        return this.tickets;
    }

    getTotalCoast(): number {
        return this.tickets.map(t => t.price).reduce((acc, value) => acc + value, 0);
    }

    getLength(): number {
        return this.tickets.length + 1;
    }

    addTicket(ticket: Ticket) {
        this.tickets.push(ticket);
        this.ticketsChanged.emit(this.tickets.slice());
        this.totalChanged.emit(this.getTotalCoast());
    }
    
    removeTicket(ticket: Ticket) {
        const index = this.tickets.indexOf(ticket);
        this.tickets.splice(index, 1);
        this.ticketsChanged.emit(this.tickets.slice());
        this.totalChanged.emit(this.getTotalCoast());
    }

}
