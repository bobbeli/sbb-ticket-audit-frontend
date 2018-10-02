import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.css']
})
export class DashbaordComponent implements OnInit {
  user: User;
  totalCoast: number;

  constructor(private userService: UserService, private ticketService: TicketService) {

   }

  ngOnInit() {
    this.user = this.userService.getUser();
    this.totalCoast = this.ticketService.getTotalCoast();
    this.ticketService.totalChanged.subscribe((newTotalCoast: number) => {
      if (newTotalCoast) {
        this.totalCoast = newTotalCoast;

      }
    });
  }

}
