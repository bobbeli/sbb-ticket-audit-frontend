import { Component, OnInit } from '@angular/core';
import { TicketService } from './tickets/ticket.service';
import { Ticket } from './tickets/ticket.model';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {
  }

}
