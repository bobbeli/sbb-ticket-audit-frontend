import {Ticket} from '../models/ticket.model';
import {Injectable, EventEmitter} from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
export class TicketService {
    ticketsChanged = new EventEmitter<Ticket[]>();
    totalChanged = new EventEmitter<number>();

    private tickets: Ticket[] = [];

    getTickets() {
        return this.tickets;
    }

    getTotalCoast(): number {
        return this.tickets.map(t => t.Price).reduce((a, b) => a + b, 0);
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

    generateTicketId(): string {
        let text: string = '';
        const possible: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < 16; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }

}
