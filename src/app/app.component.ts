import { Component } from '@angular/core';
import { Ticket } from './body/tickets/ticket.model';
import { TicketService } from './body/tickets/ticket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'SBB Money Saver';
  ticketService: TicketService;

  constructor() {
  }


  public get getTitle(): string {
    return this.title;
  }

}
