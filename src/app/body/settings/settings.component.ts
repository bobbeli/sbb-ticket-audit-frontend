import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { APIService } from 'src/app/services/api.service';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { TicketService } from 'src/app/services/ticket.service';
import { Ticket } from 'src/app/models/ticket.model';
import { Observable } from 'rxjs';
import { ResponseTicket } from 'src/app/interfaces/ticket.interface';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  email: FormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  user: User;

  constructor(private apiService: APIService, private userService: UserService, private ticketService: TicketService) {}

  ngOnInit() {
  }

  onSubmit(event: FormControl) {
    // ToDo: Create Async request to server with email (event.value)
    this.user = this.userService.getUser();
    this.apiService.getAllTickets(this.user).subscribe((res: ResponseTicket) => {
      if ( res.hasOwnProperty('value') ) {
        res.value.map(t => {
          console.log(t);
          this.ticketService.addTicket(new Ticket(t._id, t.creationDate, t.type, t.price));

        });
      }
    }, err => console.log('err piiser', err));


    console.log(this.ticketService.getTickets());

  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'Email ist zwingend' :
        this.email.hasError('email') ? 'WTF? Das ist keine Email.' :
            '';
  }


}
