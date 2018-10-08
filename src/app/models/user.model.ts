import { Ticket } from './ticket.model';

export class User {
    _id: string;
    FirstName: string;
    LastName: string;
    Email: string;
    EmailType: string;
    TicketList: Ticket[];

    constructor(_id: string,
        FirstName: string,
        LastName: string,
        Email: string) {
        this._id = _id;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Email = Email;
        this.TicketList = new Array<Ticket>();
    }
}
