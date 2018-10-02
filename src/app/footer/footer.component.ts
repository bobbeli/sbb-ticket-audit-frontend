import {Component, Inject, Output, EventEmitter} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { CreateTicketFormComponent } from './create-ticket-form/create-ticket-form.component';
import { Ticket } from '../models/ticket.model';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  ticketService: TicketService;
  ticket: Ticket;

  constructor(public dialog: MatDialog,
    ticketService: TicketService) {
      this.ticketService = ticketService;
      this.ticket = new Ticket(this.ticketService.getLength(), new Date(), 'Regular');
    }



  openDialog(): void {
    const dialogRef = this.dialog.open(CreateTicketFormComponent, {
      width: '500px',
      data: this.ticket
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.price) {
        this.ticketService.addTicket(result);

      }
    });

  }

}
