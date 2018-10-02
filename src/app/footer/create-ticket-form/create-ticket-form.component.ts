import { Component, OnInit, Inject } from '@angular/core';
import { FooterComponent } from '../footer.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Ticket } from '../../models/ticket.model';
import {FormControl} from '@angular/forms';
import { TicketService } from '../../services/ticket.service';


@Component({
  selector: 'app-create-ticket-form',
  templateUrl: './create-ticket-form.component.html',
  styleUrls: ['./create-ticket-form.component.css']
})

export class CreateTicketFormComponent implements OnInit {
  ticket: Ticket;
  ticketService: TicketService;


  constructor(
    public dialogRef: MatDialogRef<FooterComponent>,
    @Inject(MAT_DIALOG_DATA) public ticketIng: Ticket,
    ticketService: TicketService
    ) {
      this.ticketService = ticketService;
    }

  ngOnInit() {
      this.ticket = new Ticket(
        this.ticketService.getLength(),
        new Date(),
        'Regular'
      );
  }


}
